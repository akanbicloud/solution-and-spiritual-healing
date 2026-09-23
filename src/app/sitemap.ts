import { MetadataRoute } from "next";
import { fallbackProducts } from "@/content/products";
import { getPublishedPosts } from "@/content/posts";
import { getProducts, getPosts } from "@/lib/cms";
import { siteConfig } from "@/config/site";

export const revalidate = 3600; // Revalidate sitemap at most once per hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    siteConfig.url ||
    "https://spiritualandsolutionhealing.com.ng"
  ).replace(/\/$/, "");

  let products = fallbackProducts;
  let posts = getPublishedPosts();

  try {
    const [cmsProducts, cmsPosts] = await Promise.all([
      getProducts(),
      getPosts(),
    ]);
    if (cmsProducts && cmsProducts.length > 0) {
      products = cmsProducts;
    }
    if (cmsPosts && cmsPosts.length > 0) {
      posts = cmsPosts;
    }
  } catch {
    // Gracefully fall back to local content
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/book`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/videos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = products
    .filter((p) => p.active !== false)
    .map((p) => ({
      url: `${siteUrl}/products/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => {
    let lastMod = new Date();
    if (p.publishedAt) {
      const parsed = new Date(p.publishedAt);
      if (!isNaN(parsed.getTime())) {
        lastMod = parsed;
      }
    }
    return {
      url: `${siteUrl}/blog/${p.slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.75,
    };
  });

  return [...staticRoutes, ...productRoutes, ...postRoutes];
}


