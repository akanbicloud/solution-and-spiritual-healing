export interface Dua {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  source: string;
  category: "Healing & Health" | "Protection & Peace" | "Breakthrough & Ease" | "Family & Home";
  active: boolean;
}

export const fallbackDuas: Dua[] = [
  {
    id: "dua-1",
    category: "Healing & Health",
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي، لاَ شِفَاءَ إِلاَّ شِفَاؤُكَ، شِفَاءً لاَ يُغَادِرُ سَقَمًا",
    transliteration:
      "Allahumma Rabba an-naas, adh-hibil-ba's, ishfi Antash-Shaafee, laa shifaa'a illaa shifaa'uk, shifaa'an laa yughaadiru saqamaa.",
    translation:
      "O Allah, Lord of mankind, remove the hardship and grant healing. You are the Ultimate Healer; there is no healing except Your healing—a healing that leaves behind no ailment.",
    source: "Sahih al-Bukhari 5743 & Sahih Muslim 2191",
    active: true,
  },
  {
    id: "dua-2",
    category: "Protection & Peace",
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Bismillahil-ladhee laa yadurru ma'as-mihee shay'un fil-ardi wa laa fis-samaa'i wa Huwas-Samee'ul-'Aleem.",
    translation:
      "In the Name of Allah, with Whose Name nothing upon the earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
    source: "Sunan Abi Dawud 5088 & Jami` at-Tirmidhi 3388",
    active: true,
  },
  {
    id: "dua-3",
    category: "Breakthrough & Ease",
    arabic: "اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً",
    transliteration:
      "Allahumma laa sahla illaa maa ja'altahu sahlaa, wa Anta taj'alul-hazna idhaa shi'ta sahlaa.",
    translation:
      "O Allah, nothing is easy except that which You have made easy, and You can make any distress or difficulty easy if it is Your will.",
    source: "Sahih Ibn Hibban 974",
    active: true,
  },
  {
    id: "dua-4",
    category: "Protection & Peace",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'oodhu bi-kalimaatillaahit-taammaati min sharri maa khalaq.",
    translation:
      "I seek refuge in the perfect words of Allah from the evil of that which He has created.",
    source: "Sahih Muslim 2708",
    active: true,
  },
  {
    id: "dua-5",
    category: "Breakthrough & Ease",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ",
    transliteration:
      "Allahumma innee a'oodhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-jubni wal-bukhl, wa dala'id-dayn, wa ghalabatir-rijaal.",
    translation:
      "O Allah, I seek refuge in You from grief and sorrow, from incapacity and laziness, from cowardice and miserliness, from the burden of debt and from being overpowered by people.",
    source: "Sahih al-Bukhari 2893",
    active: true,
  },
  {
    id: "dua-6",
    category: "Breakthrough & Ease",
    arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    transliteration: "Rabbi innee limaa anzalta ilayya min khayrin faqeer.",
    translation:
      "My Lord, truly I am in dire need of whatever good You bestow upon me.",
    source: "Surah Al-Qasas (28:24)",
    active: true,
  },
  {
    id: "dua-7",
    category: "Family & Home",
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    transliteration:
      "Rabbanaa hab lanaa min azwaajinaa wa dhurriyyatinaa qurrata a'yunin waj'alnaa lil-muttaqeena imaamaa.",
    translation:
      "Our Lord, grant us from among our spouses and offspring comfort to our eyes, and make us an example for the righteous.",
    source: "Surah Al-Furqan (25:74)",
    active: true,
  },
];

/**
 * Calculates the Dua of the Day for Africa/Lagos timezone (GMT+1)
 */
export function getDuaOfTheDay(): Dua | null {
  const activeDuas = fallbackDuas.filter((d) => d.active);
  if (activeDuas.length === 0) return null;

  // Compute day of year in Africa/Lagos timezone (UTC+1)
  const now = new Date();
  const lagosOffsetMs = 60 * 60 * 1000;
  const lagosTime = new Date(now.getTime() + lagosOffsetMs);

  const startOfYear = new Date(Date.UTC(lagosTime.getUTCFullYear(), 0, 1));
  const diffTime = lagosTime.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const index = Math.abs(dayOfYear) % activeDuas.length;
  return activeDuas[index];
}
