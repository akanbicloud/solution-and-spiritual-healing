import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getPosts, getProducts } from "@/lib/cms";

export const PRIMARY_DOMAIN = siteConfig.url;

// Rebuilt at most once an hour so products and posts published in the CMS appear without a redeploy.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = PRIMARY_DOMAIN;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/products`,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/services`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/book`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/videos`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const [products, posts] = await Promise.all([getProducts(), getPosts()]);

  // Only real dates are reported. A made-up "modified today" on every page teaches Google to ignore the field.
  const productRoutes: MetadataRoute.Sitemap = products
    .filter((p) => p.active !== false)
    .map((p) => ({
      url: `${siteUrl}/products/${p.slug}`,
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => {
    const parsed = p.publishedAt ? new Date(p.publishedAt) : null;
    return {
      url: `${siteUrl}/blog/${p.slug}`,
      ...(parsed && !isNaN(parsed.getTime()) ? { lastModified: parsed } : {}),
      changeFrequency: "monthly",
      priority: 0.75,
    };
  });

  return [...staticRoutes, ...productRoutes, ...postRoutes];
}
