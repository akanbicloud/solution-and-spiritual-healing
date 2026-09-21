export interface ArabicPassageBlock {
  type: "arabicPassage";
  arabicText: string;
  transliteration: string;
  translation: string;
  source: string;
}

export interface TextBlock {
  type: "paragraph";
  content: string;
}

export interface HeadingBlock {
  type: "heading";
  level: 2 | 3;
  content: string;
}

export interface ListBlock {
  type: "list";
  items: string[];
}

export interface QuoteBlock {
  type: "quote";
  quote: string;
  author?: string;
}

export type ContentBlock =
  | TextBlock
  | HeadingBlock
  | ListBlock
  | QuoteBlock
  | ArabicPassageBlock;

export interface Post {
  id: string;
  slug: string;
  title: string;
  category:
    | "Dua and adhkar"
    | "Ruqyah and protection"
    | "Patience and hope"
    | "Family and home"
    | "Product guides";
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  body: ContentBlock[];
  videoUrl?: string;
  audioUrl?: string;
  publishedAt: string; // ISO 8601
  featured: boolean;
  readingTimeMinutes: number;
  seoTitle?: string;
  seoDescription?: string;
  translations?: {
    ar?: { title: string; excerpt: string; body: ContentBlock[] };
    yo?: { title: string; excerpt: string; body: ContentBlock[] };
    ha?: { title: string; excerpt: string; body: ContentBlock[] };
  };
}

export const fallbackPosts: Post[] = [
  {
    id: "post-1",
    slug: "power-of-consistent-morning-adhkar",
    title: "The Unfailing Shield: Finding Peace and Protection in Morning Adhkar",
    category: "Ruqyah and protection",
    excerpt:
      "Discover the spiritual tranquility and continuous shield that authentic morning supplications bring into your day and home.",
    coverImage: "/images/alfacairo-dua.jpg",
    coverImageAlt: "Alfacairo in heartfelt morning supplication and prayer",
    featured: true,
    publishedAt: "2026-09-15T08:00:00Z",
    readingTimeMinutes: 5,
    seoTitle: "Finding Spiritual Peace & Protection in Morning Adhkar | Alfacairo",
    seoDescription:
      "A guided reflection by Alfacairo on establishing daily morning remembrance (adhkar) for continuous peace, clarity, and protection.",
    body: [
      {
        type: "paragraph",
        content:
          "In the rush and demands of our modern routines, the human heart often feels unsettled. From the early hours of the morning, worries about work, provision, health, and family begin to crowd our thoughts. Yet, the prophetic tradition teaches us that the best way to open any morning is with tranquil remembrance of the Creator.",
      },
      {
        type: "heading",
        level: 2,
        content: "A Daily Spiritual Citadel",
      },
      {
        type: "paragraph",
        content:
          "Just as one washes the face and eats to nourish the physical body, the spirit requires its morning sustenance. When a believer recites the morning adhkar with conscious presence, they establish an unseen sanctuary of light and divine safeguarding around their person, their children, and their dwelling.",
      },
      {
        type: "arabicPassage",
        arabicText: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        transliteration:
          "Bismillahil-ladhee laa yadurru ma'as-mihee shay'un fil-ardi wa laa fis-samaa'i wa Huwas-Samee'ul-'Aleem.",
        translation:
          "In the Name of Allah, with Whose Name nothing upon the earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
        source: "Sunan Abi Dawud (5088) — Recited three times morning and evening",
      },
      {
        type: "heading",
        level: 2,
        content: "Practical Steps to Maintain Consistency",
      },
      {
        type: "list",
        items: [
          "Set aside just ten focused minutes immediately following the morning prayer (Fajr).",
          "Begin with seeking forgiveness (Istighfar) to purify the heart and invite barakah into the day.",
          "Keep your intentions sincere and focus on the meaning rather than rushing through words.",
          "Pair your remembrance with traditional, prayer-prepared wellness practices for complete body and soul harmony.",
        ],
      },
      {
        type: "quote",
        quote:
          "Prayer is not just words spoken in time of distress; it is the continuous lifeline that keeps peace alive within you.",
        author: "Alfacairo",
      },
    ],
  },
  {
    id: "post-2",
    slug: "patience-and-trust-during-life-delays",
    title: "When Doors Seem Closed: Cultivating Sabr (Patience) and Certainty",
    category: "Patience and hope",
    excerpt:
      "Experiencing career stagnation or delay in life milestones? Understand how divine timing works and how sincere prayer transforms seasons of waiting.",
    coverImage: "/images/alfacairo-portrait.jpg",
    coverImageAlt: "Alfacairo holding microphone with open Quran at Alfa Cairo House",
    featured: false,
    publishedAt: "2026-09-18T10:00:00Z",
    readingTimeMinutes: 4,
    seoTitle: "Cultivating Patience and Faith During Life Delays | Alfacairo",
    seoDescription:
      "Spiritual guidance on navigating seasons of delay, financial hardship, and waiting on breakthrough with certainty in divine timing.",
    body: [
      {
        type: "paragraph",
        content:
          "One of the most frequent spiritual inquiries brought to our counselling sessions at Alfa Cairo House in Owode Egba is the pain of feeling delayed. Whether it is marriage, employment, business expansion, or childbirth, human impatience often mistakes a period of preparation for a final denial.",
      },
      {
        type: "heading",
        level: 2,
        content: "Understanding Sabr Jameel (Beautiful Patience)",
      },
      {
        type: "paragraph",
        content:
          "Patience in spiritual tradition is not passive defeat or silent suffering. It is active spiritual endurance coupled with good expectations of God. It means continuing to knock on doors, pursuing righteous means, and holding one's tongue from complaints while trusting that divine decree carries wisdom beyond immediate sight.",
      },
      {
        type: "arabicPassage",
        arabicText: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        transliteration: "Rabbi innee limaa anzalta ilayya min khayrin faqeer.",
        translation:
          "My Lord, truly I am in dire need of whatever good You bestow upon me.",
        source: "Surah Al-Qasas (28:24) — Supplication of Prophet Musa (AS)",
      },
      {
        type: "paragraph",
        content:
          "Whenever you feel weighed down by stagnation, return to this timeless prayer. Keep your heart open to guidance, consult trusted spiritual counsellors, and remember that divine aid often arrives at the exact moment of surrender.",
      },
    ],
  },
  {
    id: "post-3",
    slug: "protecting-your-household-with-harmal",
    title: "Traditional Household Cleansing: The Heritage and Use of Harmal Incense",
    category: "Product guides",
    excerpt:
      "Explore the traditional botanical background of Harmal incense and how to use natural aromatics to foster tranquility and positive energy at home.",
    coverImage: "/images/products/harmal-incense.jpg",
    coverImageAlt: "Jar of Harmal Incense with brass censer and smoke",
    featured: false,
    publishedAt: "2026-09-10T14:00:00Z",
    readingTimeMinutes: 4,
    seoTitle: "The Heritage and Use of Harmal Incense for Home Peace | Alfacairo",
    seoDescription:
      "Guide to traditional African and Islamic botanical practices using Harmal incense to freshen home spaces and encourage a calm atmosphere.",
    body: [
      {
        type: "paragraph",
        content:
          "For generations across West Africa and the wider Islamic world, natural aromatics have played a comforting role in home wellness. Among the most cherished traditional plants is Harmal (Peganum harmala), valued for its distinct fragrance and cleansing properties.",
      },
      {
        type: "heading",
        level: 2,
        content: "Creating a Peaceful Atmosphere",
      },
      {
        type: "paragraph",
        content:
          "The home should be a refuge of serenity away from the clamour of daily life. When burned gently over charcoal, Harmal releases an earthy, soothing botanical smoke that freshens indoor air and creates a serene backdrop for family gatherings and evening supplications.",
      },
      {
        type: "list",
        items: [
          "Ensure rooms have mild ventilation when lighting incense.",
          "Combine the fragrance with the recitation of Surah Al-Baqarah and protective verses.",
          "Use regularly after cleaning to maintain a spiritually uplifting household atmosphere.",
        ],
      },
    ],
  },
  {
    id: "post-4",
    slug: "family-harmony-and-peace-in-marriage",
    title: "Strengthening Marital Bonds: Faith-Inspired Counsel for Couples",
    category: "Family and home",
    excerpt:
      "Practical guidance on nurturing compassion, mutual respect, and spiritual alignment within the Muslim and faith-centered marriage.",
    coverImage: "/images/alfacairo-green-scarf.jpg",
    coverImageAlt: "Alfacairo providing spiritual counselling and wisdom",
    featured: false,
    publishedAt: "2026-09-05T12:00:00Z",
    readingTimeMinutes: 6,
    body: [
      {
        type: "paragraph",
        content:
          "Marriage is described in sacred tradition as a garment of peace, comfort, and mutual covering. However, misunderstandings, external family pressures, and financial stressors can strain even strong bonds if not handled with spiritual wisdom.",
      },
      {
        type: "arabicPassage",
        arabicText: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
        transliteration:
          "Wa min aayaatihee an khalaqa lakum min anfusikum azwaajan li-taskunoo ilayhaa wa ja'ala baynakum mawaddatan wa rahmah.",
        translation:
          "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.",
        source: "Surah Ar-Rum (30:21)",
      },
      {
        type: "paragraph",
        content:
          "Whenever conflict arises, choose listening over contention. Seek common counsel before disagreements harden into resentment, and let your home be saturated with prayer and mutual grace.",
      },
    ],
  },
  {
    id: "post-5",
    slug: "spiritual-neutralization-breaking-stagnation",
    title: "Spiritual Cleansing: Restoring Vitality When Everything Feels Blocked",
    category: "Ruqyah and protection",
    excerpt:
      "How traditional prayer-infused wellness solutions help release feelings of heaviness, persistent unexplainable obstacles, and spiritual burden.",
    coverImage: "/images/products/spiritual-cleansing.jpg",
    coverImageAlt: "Spiritual Neutralization set botanical bottles and preparations",
    featured: false,
    publishedAt: "2026-09-01T09:00:00Z",
    readingTimeMinutes: 5,
    body: [
      {
        type: "paragraph",
        content:
          "At times, individuals encounter seasons where despite their best efforts, business deals collapse at the last second, unexplained fear disturbs their sleep, and persistent fatigue shadows their day. In traditional spiritual practice, these experiences often signal the need for a focused spiritual reset.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Role of Ruqyah and Traditional Support",
      },
      {
        type: "paragraph",
        content:
          "Spiritual neutralization brings together dedicated prayer, Quranic recitation (Ruqyah), and pure botanical wash preparations. It serves to clear spiritual debris, restore emotional lightness, and re-anchor the seeker's reliance firmly upon the Creator.",
      },
    ],
  },
];

/**
 * Filter posts so only published posts (publishedAt <= now) are displayed.
 */
export function getPublishedPosts(): Post[] {
  const now = new Date();
  return fallbackPosts.filter((post) => new Date(post.publishedAt) <= now);
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getPublishedPosts();
  return posts.find((p) => p.slug === slug);
}
