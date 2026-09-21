export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Herbal Tonics" | "Capsules & Drops" | "Spiritual & Cleansing";
  image: string;
  shortDescription: string;
  longDescription: string[];
  whatsappMessage: string;
  active: boolean;
  order: number;
}

export const fallbackProducts: Product[] = [
  {
    id: "prod-1",
    slug: "cholesterol-solution",
    name: "Cholesterol Solution",
    category: "Herbal Tonics",
    image: "/images/products/cholesterol-solution.jpg",
    shortDescription:
      "Traditional herbal support for cardiovascular wellness and maintaining healthy cholesterol balance alongside a wholesome lifestyle.",
    longDescription: [
      "A carefully prepared traditional herbal formulation crafted with pure botanical extracts to support everyday heart health, healthy circulation, and natural lipid balance.",
      "Rooted in prophetic and traditional herbal wellness wisdom, this blend assists the body in maintaining general vitality when combined with balanced nutrition and active living.",
      "Prepared under traditional preparation standards at Alfa Cairo House, Owode Egba."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry and order the Cholesterol Solution.",
    active: true,
    order: 1,
  },
  {
    id: "prod-2",
    slug: "brain-booster",
    name: "Brain Booster (Mental Clarity)",
    category: "Herbal Tonics",
    image: "/images/products/brain-booster.jpg",
    shortDescription:
      "Herbal blend specially prepared to support memory, daily concentration, and natural mental clarity.",
    longDescription: [
      "Brain Booster is formulated from time-tested botanical roots and seed extracts that provide traditional nutritional support for cognitive refreshment.",
      "Ideal for students, professionals, and elders seeking natural herbs to promote focus, mental sharpness, and reduced mental tiredness.",
      "Traditional herbal formulation accompanied by prayers for clarity and understanding."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry and order the Brain Booster.",
    active: true,
    order: 2,
  },
  {
    id: "prod-3",
    slug: "eye-care-drops-tonic",
    name: "Eye Care Drops & Tonic",
    category: "Capsules & Drops",
    image: "/images/products/eye-care.jpg",
    shortDescription:
      "Traditional herbal eye care formulated for everyday eye comfort, cooling sensation, and visual refreshment.",
    longDescription: [
      "A gentle herbal combination containing both drops and tonic designed to support soothing relief and everyday visual comfort.",
      "Prepared with pure natural essences to provide traditional comfort against environmental strain, fatigue, and dry sensations.",
      "Always follow recommended traditional directions. Free from harsh chemicals."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry and order the Eye Care Drops & Tonic.",
    active: true,
    order: 3,
  },
  {
    id: "prod-4",
    slug: "joint-back-comfort",
    name: "Joint & Back Comfort",
    category: "Herbal Tonics",
    image: "/images/products/joint-back-comfort.jpg",
    shortDescription:
      "Herbal support for joint, back, waist, and bone comfort for active everyday mobility.",
    longDescription: [
      "Crafted from deep-forest roots and therapeutic tree barks revered in African traditional wellness for easing muscular stiffness and soothing bone comfort.",
      "Helps support flexibility, smooth joint movement, and ease of daily routine across all ages.",
      "Traditional herbal tonic prepared with dedication at Alfa Cairo House."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry and order the Joint & Back Comfort.",
    active: true,
    order: 4,
  },
  {
    id: "prod-5",
    slug: "immune-support-capsules",
    name: "Immune Support Capsules",
    category: "Capsules & Drops",
    image: "/images/products/immune-support.jpg",
    shortDescription:
      "Traditional herbal capsules formulated to support the body's natural defences and overall daily vitality.",
    longDescription: [
      "Contains finely processed therapeutic herbs known for assisting the body's natural resilience, internal balance, and cleansing.",
      "Encourages steady stamina and general physical well-being throughout changing seasons.",
      "Easy-to-take natural plant cellulose capsules prepared under hygienic standards."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry and order the Immune Support Capsules.",
    active: true,
    order: 5,
  },
  {
    id: "prod-6",
    slug: "man-power-vitality-capsules",
    name: "Man Power (Men's Vitality) Capsules",
    category: "Capsules & Drops",
    image: "/images/products/man-power.jpg",
    shortDescription:
      "Natural herbal support for men's stamina, physical vigor, renewed confidence, and marital wellness.",
    longDescription: [
      "An energizing traditional herbal formulation developed for men seeking enhanced vigor, physical stamina, and confidence.",
      "Contains pure African botanical energizers that nourish male vitality, relieve physical stress, and support inner endurance naturally.",
      "Faith-rooted traditional wellness for peace and harmony in marriage."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry and order the Man Power Capsules.",
    active: true,
    order: 6,
  },
  {
    id: "prod-7",
    slug: "stomach-care-tonic",
    name: "Stomach Care Tonic",
    category: "Herbal Tonics",
    image: "/images/products/stomach-care.jpg",
    shortDescription:
      "Traditional herbal support for soothing stomach comfort, digestive balance, and internal ease.",
    longDescription: [
      "A comforting herbal blend created to support healthy digestion, calm abdominal fullness, and maintain smooth gastrointestinal comfort.",
      "Blended with gentle digestive herbs and soothing traditional extracts respected for promoting stomach peace.",
      "Suitable for regular traditional dietary support."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry and order the Stomach Care Tonic.",
    active: true,
    order: 7,
  },
  {
    id: "prod-8",
    slug: "body-heat-burning-remedy",
    name: "Body Heat & Burning Sensation Remedy",
    category: "Herbal Tonics",
    image: "/images/products/body-heat.jpg",
    shortDescription:
      "Traditional herbal remedy formulated for body heat sensations, internal restlessness, and cooling comfort.",
    longDescription: [
      "Designed specifically for individuals experiencing uncomfortable internal warm sensations, restlessness, and heat in the chest, head, or extremities.",
      "Formulated with cooling, purifying traditional botanical preparations to bring soothing physical comfort and tranquility.",
      "A cornerstone herbal combination from Alfa Cairo's traditional wellness dispensary."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry and order the Body Heat & Burning Sensation Remedy.",
    active: true,
    order: 8,
  },
  {
    id: "prod-9",
    slug: "ear-care-drops-tonic",
    name: "Ear Care Drops & Tonic",
    category: "Capsules & Drops",
    image: "/images/products/ear-care.jpg",
    shortDescription:
      "Traditional herbal ear care solution prepared to support ear comfort, auditory soothing, and cleansing.",
    longDescription: [
      "A dual-action herbal system featuring soothing drops and supportive tonic to ease auditory discomfort, itching, and dryness.",
      "Combines gentle plant infusions and traditional oils to protect ear passage comfort and clarity.",
      "Easy application with hygienic dropper bottle."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry and order the Ear Care Drops & Tonic.",
    active: true,
    order: 9,
  },
  {
    id: "prod-10",
    slug: "spiritual-neutralization-set",
    name: "Spiritual Neutralization Set",
    category: "Spiritual & Cleansing",
    image: "/images/products/spiritual-cleansing.jpg",
    shortDescription:
      "Prayer-prepared herbal mixtures used for spiritual cleansing, peace of mind, and protection from envy and negative influence.",
    longDescription: [
      "A comprehensive prayer-infused traditional set containing specialized cleansing herbal waters, bath powders, and protective herbal blends.",
      "Specially prepared with focused supplications (Ruqyah) to break feelings of heavy stagnation, evil eye (hasad), and unexplained spiritual unrest.",
      "Helps usher in a peaceful, uplifted atmosphere in your personal life and home environment."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry regarding the Spiritual Neutralization Set.",
    active: true,
    order: 10,
  },
  {
    id: "prod-11",
    slug: "success-connections-kit",
    name: "Success & Connections Kit",
    category: "Spiritual & Cleansing",
    image: "/images/products/success-connections.jpg",
    shortDescription:
      "Prayer-prepared blend for individuals seeking divine favour, elevation, positive life connections, and open doors.",
    longDescription: [
      "Formulated for professionals, business owners, and seekers of life elevation who desire divine assistance in overcoming delays and attracting goodwill.",
      "Combines traditional aromatic oils and sanctified herbal preparations paired with structured daily prayers and guidance from Alfacairo.",
      "A positive spiritual companion for work, contracts, trade, and life milestones."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry regarding the Success & Connections Kit.",
    active: true,
    order: 11,
  },
  {
    id: "prod-12",
    slug: "harmal-incense",
    name: "Harmal Incense (Traditional Cleansing)",
    category: "Spiritual & Cleansing",
    image: "/images/products/harmal-incense.jpg",
    shortDescription:
      "Traditional aromatic herbal incense to cleanse, purify, and freshen the home environment for peace and spiritual tranquility.",
    longDescription: [
      "Harvested harmal seeds and fragrant botanicals used traditionally across Islamic cultures for household purification and repelling negative energies.",
      "Releases a rich, calming herbal fragrance when burned over charcoal or an incense burner, creating a serene sanctuary for prayer and family unity.",
      "A treasured household item for continuous spiritual protection."
    ],
    whatsappMessage:
      "Assalamu alaikum Alfacairo, I would like to make an enquiry and order the Harmal Incense.",
    active: true,
    order: 12,
  },
];
