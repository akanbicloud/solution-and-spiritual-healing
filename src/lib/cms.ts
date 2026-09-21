import { sanityClient } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import { fallbackProducts, Product } from "@/content/products";
import { fallbackDuas, Dua } from "@/content/duas";
import { fallbackPosts, Post, getPublishedPosts } from "@/content/posts";
import { fallbackSiteSettings, SiteSettings } from "@/content/siteSettings";
import { fallbackTestimonials, Testimonial } from "@/content/testimonials";
import { fallbackMediaItems, MediaItem, fallbackGallery, GalleryPhoto } from "@/content/media";

// Revalidation time for ISR
export const REVALIDATE_TIME = 60;

/**
 * Fetch all active products
 */
export async function getProducts(): Promise<Product[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const query = `*[_type == "product" && active == true] | order(order asc) {
        "id": _id,
        "slug": slug.current,
        name,
        category,
        "image": image.asset->url,
        shortDescription,
        "longDescription": select(
          defined(longDescription) => longDescription[].children[].text,
          []
        ),
        active,
        order
      }`;
      const results = await sanityClient.fetch<Product[]>(
        query,
        {},
        { next: { revalidate: REVALIDATE_TIME, tags: ["products"] } }
      );
      if (results && results.length > 0) {
        return results.map((p) => ({
          ...p,
          whatsappMessage: `Assalamu alaikum Alfacairo, I would like to make an enquiry and order ${p.name}.`,
        }));
      }
    } catch (err) {
      console.warn("Error fetching products from Sanity, falling back to local content:", err);
    }
  }
  return fallbackProducts;
}

/**
 * Fetch single product by slug
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) || null;
}

/**
 * Fetch all active Duas
 */
export async function getAllDuas(): Promise<Dua[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const query = `*[_type == "dua" && active == true] {
        "id": _id,
        arabic,
        transliteration,
        translation,
        source,
        category,
        active
      }`;
      const results = await sanityClient.fetch<Dua[]>(
        query,
        {},
        { next: { revalidate: REVALIDATE_TIME, tags: ["duas"] } }
      );
      if (results && results.length > 0) return results;
    } catch (err) {
      console.warn("Error fetching duas from Sanity, falling back to local content:", err);
    }
  }
  return fallbackDuas;
}

/**
 * Dua of the Day: rotates daily according to day-of-year in Africa/Lagos (GMT+1)
 */
export async function getDuaOfTheDay(): Promise<Dua | null> {
  const duas = await getAllDuas();
  const activeDuas = duas.filter((d) => d.active);
  if (activeDuas.length === 0) return null;

  // Calculate dayOfYear in Africa/Lagos timezone (UTC+1)
  const now = new Date();
  const lagosOffsetMs = 60 * 60 * 1000;
  const lagosTime = new Date(now.getTime() + lagosOffsetMs);

  const startOfYear = new Date(Date.UTC(lagosTime.getUTCFullYear(), 0, 1));
  const diffTime = lagosTime.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const index = Math.abs(dayOfYear) % activeDuas.length;
  return activeDuas[index];
}

/**
 * Fetch all published blog posts (publishedAt <= now)
 */
export async function getPosts(): Promise<Post[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const query = `*[_type == "post" && publishedAt <= now()] | order(publishedAt desc) {
        "id": _id,
        "slug": slug.current,
        title,
        category,
        excerpt,
        "coverImage": coverImage.asset->url,
        "coverImageAlt": coverImage.alt,
        body,
        videoUrl,
        audioUrl,
        publishedAt,
        featured,
        "readingTimeMinutes": 5,
        seoTitle,
        seoDescription,
        translations
      }`;
      const results = await sanityClient.fetch<Post[]>(
        query,
        {},
        { next: { revalidate: REVALIDATE_TIME, tags: ["posts"] } }
      );
      if (results && results.length > 0) return results;
    } catch (err) {
      console.warn("Error fetching posts from Sanity, falling back to local content:", err);
    }
  }
  return getPublishedPosts();
}

/**
 * Fetch single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) || null;
}

/**
 * Fetch site settings
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  if (isSanityConfigured && sanityClient) {
    try {
      const query = `*[_type == "siteSettings"][0] {
        phone,
        whatsapp,
        whatsappGroup,
        heroHeadline,
        heroSubline,
        bio,
        credentials,
        socials
      }`;
      const results = await sanityClient.fetch<SiteSettings>(
        query,
        {},
        { next: { revalidate: REVALIDATE_TIME, tags: ["siteSettings"] } }
      );
      if (results) return results;
    } catch (err) {
      console.warn("Error fetching site settings from Sanity, falling back to local content:", err);
    }
  }
  return fallbackSiteSettings;
}

/**
 * Fetch approved testimonials (returns empty if none approved)
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const query = `*[_type == "testimonial" && approved == true] {
        "id": _id,
        name,
        location,
        text,
        approved
      }`;
      const results = await sanityClient.fetch<Testimonial[]>(
        query,
        {},
        { next: { revalidate: REVALIDATE_TIME, tags: ["testimonials"] } }
      );
      if (results && results.length > 0) return results;
    } catch (err) {
      console.warn("Error fetching testimonials from Sanity:", err);
    }
  }
  return fallbackTestimonials.filter((t) => t.approved);
}

/**
 * Fetch media items
 */
export async function getMediaItems(): Promise<MediaItem[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const query = `*[_type == "mediaItem"] {
        "id": _id,
        title,
        type,
        url
      }`;
      const results = await sanityClient.fetch<MediaItem[]>(
        query,
        {},
        { next: { revalidate: REVALIDATE_TIME, tags: ["media"] } }
      );
      if (results && results.length > 0) return results;
    } catch (err) {
      console.warn("Error fetching media items from Sanity:", err);
    }
  }
  return fallbackMediaItems;
}

/**
 * Fetch photo gallery items
 */
export function getGalleryPhotos(): GalleryPhoto[] {
  return fallbackGallery;
}
