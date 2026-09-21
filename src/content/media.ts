export interface MediaItem {
  id: string;
  title: string;
  type: "YouTube" | "TikTok";
  url: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  image: string;
  caption?: string;
}

export const fallbackMediaItems: MediaItem[] = [
  {
    id: "media-1",
    title: "Spiritual Guidance & Daily Adhkar Lecture by Alfacairo",
    type: "YouTube",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder embed
  },
];

export const fallbackGallery: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Alfa Cairo House — Owode Egba",
    image: "/images/house.jpg",
    caption: "The spiritual sanctuary and prayer centre in Owode Egba, Ogun State.",
  },
  {
    id: "gal-2",
    title: "Alfacairo in Prayer & Teaching",
    image: "/images/alfacairo-portrait.jpg",
    caption: "Leading Quranic reflections and spiritual guidance sessions.",
  },
  {
    id: "gal-3",
    title: "Spiritual Supplications (Dua)",
    image: "/images/alfacairo-dua.jpg",
    caption: "Heartfelt supplication for the healing and breakthrough of seekers.",
  },
  {
    id: "gal-4",
    title: "Traditional Herbal Preparations",
    image: "/images/products/spiritual-cleansing.jpg",
    caption: "Sanctified prayer-infused herbal wellness mixtures.",
  },
  {
    id: "gal-5",
    title: "Counsel and Fellowship",
    image: "/images/alfacairo-green-scarf.jpg",
    caption: "One-on-one and community spiritual counselling.",
  },
];
