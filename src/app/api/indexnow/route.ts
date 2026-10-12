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
    const urlList = (await sitemap()).map((x) => x.url).slice(0, 10000);
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host, key, keyLocation, urlList }),
    }).catch(() => null);
    return NextResponse.json({ success: !!response && (response.status === 200 || response.status === 202), status: response?.status ?? "network error", submittedCount: urlList.length });
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
