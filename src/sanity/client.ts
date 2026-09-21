import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, isSanityConfigured } from "./env";

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // Set to false if statically generating or wanting latest
    })
  : null;

const builder = isSanityConfigured && sanityClient ? imageUrlBuilder(sanityClient) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder || !source) return null;
  return builder.image(source);
}
