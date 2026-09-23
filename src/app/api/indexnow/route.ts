import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

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

export async function GET() {
  const siteUrl = siteConfig.url;
  const host = new URL(siteUrl).hostname;
  const key = siteConfig.indexNowKey;
  const keyLocation = `${siteUrl}/${key}.txt`;

  return NextResponse.json({
    status: "ready",
    host,
    key,
    keyLocation,
    endpoint: "https://api.indexnow.org/indexnow",
    usage: "Send POST with optional JSON { urlList: ['https://...'] }",
  });
}
