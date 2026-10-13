import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import sitemap from "@/app/sitemap";

/**
 * IndexNow Submission API Route
 * Sends updated URLs directly to participating search engines (Bing, Yandex, Seznam, Naver).
 */
export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const secret = process.env.SANITY_REVALIDATE_SECRET || "indexnow-secret";

    // Optional secret check to prevent abuse
    if (authHeader && authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const siteUrl = siteConfig.url;
    const host = new URL(siteUrl).hostname;
    const key = siteConfig.indexNowKey;
    const keyLocation = `${siteUrl}/${key}.txt`;

    // Default to core public pages if not provided
    const urlList: string[] = Array.isArray(body.urlList) && body.urlList.length > 0
      ? body.urlList
      : [
          `${siteUrl}/`,
          `${siteUrl}/services`,
          `${siteUrl}/products`,
          `${siteUrl}/about`,
          `${siteUrl}/contact`,
          `${siteUrl}/weekly-prayer`,
          `${siteUrl}/book`,
          `${siteUrl}/blog`,
          `${siteUrl}/videos`,
        ];

    const payload = {
      host,
      key,
      keyLocation,
      urlList,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submittedCount: urlList.length,
      host,
      keyLocation,
      urls: urlList,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "IndexNow submission failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * Open /api/indexnow?submit=1 in a browser to send every page in the sitemap to Bing
 * (ChatGPT search relies on Bing). Without ?submit=1 it only shows the settings.
 */
export async function GET(req: NextRequest) {
  const siteUrl = siteConfig.url;
  const host = new URL(siteUrl).hostname;
  const key = siteConfig.indexNowKey;
  const keyLocation = `${siteUrl}/${key}.txt`;

  if (req.nextUrl.searchParams.get("submit") === "1") {
    // Bing rejects the whole list (HTTP 400) if any URL is malformed, so clean it first:
    // absolute, same host, properly encoded, no duplicates.
    const raw = (await sitemap()).map((x) => x.url);
    const skipped: string[] = [];
    const clean = new Set<string>();
    for (const u of raw) {
      try {
        const url = new URL(u);
        url.pathname = url.pathname.split("/").map((seg) => encodeURIComponent(decodeURIComponent(seg))).join("/");
        if (url.hostname !== host || /\/(undefined|null)(\/|$)/.test(url.pathname)) { skipped.push(u); continue; }
        clean.add(url.toString());
      } catch {
        skipped.push(u);
      }
    }
    const send = async (urlList: string[]) => {
      const r = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ host, key, keyLocation, urlList }),
      }).catch(() => null);
      const reason = r && !(r.status === 200 || r.status === 202) ? (await r.text().catch(() => "")).slice(0, 300) : "";
      return { ok: !!r && (r.status === 200 || r.status === 202), status: r?.status ?? "network error", reason };
    };
    const all = [...clean].slice(0, 10000);
    let res = await send(all);
    let submitted = all.length;
    // If the full list is refused, at least send the main pages.
    if (!res.ok && res.status === 400) {
      const core = all.filter((u) => !/\/(products|blog)\//.test(u));
      res = await send(core);
      submitted = core.length;
    }
    return NextResponse.json({ success: res.ok, status: res.status, submittedCount: submitted, reason: res.reason || undefined, skipped: skipped.length ? skipped : undefined });
  }

  return NextResponse.json({
    status: "ready",
    host,
    key,
    keyLocation,
    endpoint: "https://api.indexnow.org/indexnow",
    usage: "Open /api/indexnow?submit=1 to send every sitemap page, or POST { urlList: [...] }",
  });
}
