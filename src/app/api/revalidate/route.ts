import { revalidateTag, revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const secret = req.headers.get("x-sanity-secret") || req.nextUrl.searchParams.get("secret");
    const configuredSecret = process.env.SANITY_REVALIDATE_SECRET;

    if (configuredSecret && secret !== configuredSecret) {
      return NextResponse.json({ message: "Invalid revalidation secret" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const tag = body?._type;

    // Revalidate paths and tags
    revalidatePath("/", "layout");
    revalidatePath("/blog");
    revalidatePath("/products");
    revalidatePath("/services");
    revalidatePath("/about");

    if (tag) {
      revalidateTag(tag, "default");
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: "Cache revalidated successfully",
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Error during revalidation";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
