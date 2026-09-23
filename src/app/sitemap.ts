import { MetadataRoute } from "next";
import { fallbackProducts } from "@/content/products";
import { fallbackPosts } from "@/content/posts";

export const PRIMARY_DOMAIN = "https://spirituallandsolutionhealing.com.ng";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = PRIMARY_DOMAIN;

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

  const productRoutes: MetadataRoute.Sitemap = fallbackProducts
    .filter((p) => p.active !== false)
    .map((p) => ({
      url: `${siteUrl}/products/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  const postRoutes: MetadataRoute.Sitemap = fallbackPosts.map((p) => {
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
