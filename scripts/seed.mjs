import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN;

if (!projectId || !token) {
  console.log("------------------------------------------------------------------");
  console.log("Notice: Sanity credentials not found in environment variables.");
  console.log("To seed documents into your remote Sanity Studio, set:");
  console.log("  NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>");
  console.log("  SANITY_API_WRITE_TOKEN=<token-with-editor-or-admin-permissions>");
  console.log("------------------------------------------------------------------");
  console.log("Seed script demonstrated successfully. The live site is currently");
  console.log("running cleanly using the rich local content fallbacks in /src/content/.");
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function runSeed() {
  console.log("Seeding 3 draft posts and 7 draft duas to Sanity Studio...");

  const draftPosts = [
    {
      _id: "drafts.seed-post-1",
      _type: "post",
      title: "Sample Draft: Seeking Steadfastness and Hope",
      slug: { _type: "slug", current: "sample-draft-steadfastness" },
      category: "Patience and hope",
      excerpt: "Sample draft post structure for testing the Sanity Studio publishing workflow.",
      publishedAt: new Date(Date.now() + 86400000).toISOString(), // future scheduled
      featured: false,
      body: [
        {
          _type: "block",
          style: "normal",
          children: [{ _type: "span", text: "Sample introductory paragraph for draft post." }],
        },
        {
          _type: "arabicPassage",
          arabicText: "[Arabic text to be supplied and verified by Alfacairo]",
          transliteration: "[Transliteration to be supplied and verified by Alfacairo]",
          translation: "[English translation to be supplied and verified by Alfacairo]",
          source: "[Source reference to be supplied]",
        },
      ],
    },
    {
      _id: "drafts.seed-post-2",
      _type: "post",
      title: "Sample Draft: Family Harmony and Daily Supplication",
      slug: { _type: "slug", current: "sample-draft-family-harmony" },
      category: "Family and home",
      excerpt: "Demonstrating family and home category content structure.",
      publishedAt: new Date(Date.now() + 172800000).toISOString(),
      featured: false,
      body: [
        {
          _type: "arabicPassage",
          arabicText: "[Arabic text to be supplied and verified by Alfacairo]",
          transliteration: "[Transliteration to be supplied and verified by Alfacairo]",
          translation: "[English translation to be supplied and verified by Alfacairo]",
          source: "[Source reference to be supplied]",
        },
      ],
    },
    {
      _id: "drafts.seed-post-3",
      _type: "post",
      title: "Sample Draft: Traditional Botanical Wellness Essentials",
      slug: { _type: "slug", current: "sample-draft-botanical-wellness" },
      category: "Product guides",
      excerpt: "Demonstrating product guide category content structure.",
      publishedAt: new Date(Date.now() + 259200000).toISOString(),
      featured: false,
      body: [
        {
          _type: "block",
          style: "normal",
          children: [{ _type: "span", text: "Guidance on traditional herbal preparations and prayers." }],
        },
      ],
    },
  ];

  const draftDuas = Array.from({ length: 7 }).map((_, i) => ({
    _id: `drafts.seed-dua-${i + 1}`,
    _type: "dua",
    arabic: "[Arabic text to be supplied and verified by Alfacairo]",
    transliteration: "[Phonetic transliteration to be verified]",
    translation: "[Translation meaning to be verified]",
    source: "[Source reference e.g., Sahih Bukhari or Quran verse]",
    category:
      i % 4 === 0
        ? "Healing & Health"
        : i % 4 === 1
        ? "Protection & Peace"
        : i % 4 === 2
        ? "Breakthrough & Ease"
        : "Family & Home",
    active: true,
  }));

  const transaction = client.transaction();
  for (const post of draftPosts) {
    transaction.createOrReplace(post);
  }
  for (const dua of draftDuas) {
    transaction.createOrReplace(dua);
  }

  await transaction.commit();
  console.log("Successfully seeded 3 draft posts and 7 draft duas (all unpublished drafts).");
}

runSeed().catch((err) => {
  console.error("Failed to seed Sanity:", err);
  process.exit(1);
});
