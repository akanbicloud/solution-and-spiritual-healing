# Solution Spiritual Healing & Prayer (حلول الشفاء والدعاء)
### Alfacairo — Owode Egba, Ogun State, Nigeria

A high-performance, ultra-luxurious, and accessible bilingual spiritual sanctuary website, blog, and content management platform built for **Alfacairo**.

---

## 🌟 Executive Summary & Design Philosophy

- **Brand:** Solution Spiritual Healing & Prayer / حلول الشفاء والدعاء
- **Spiritual Leader:** Alfacairo
- **Sanctuary Location:** Owode Egba, Ogun State, Nigeria
- **Design System:** Light, warm, and reverent ivory (`#FBF8F1`), cream (`#F4EFE3`), deep Nigerian emerald green (`#0B5D3B`), crimson (`#C8102E`), gold accents (`#C9A24B`), and readable charcoal (`#1E2A24`).
- **Typography:**
  - Headings: `Playfair Display` (Classic, elegant serif)
  - Body: `Inter` (Optimized for readability on mobile devices across 3G/4G networks)
  - Arabic: `Amiri` (Traditional, verified Quranic Naskh font)
- **Primary Iconography:** **Phosphor Icons (`@phosphor-icons/react`) ONLY**. Consistent stylistic weights (`regular`, `bold`, `fill`, `duotone`) with zero Lucide dependencies.
- **Compliance & Ethics:** Traditional wellness and pastoral comfort guidance only. No medical cures or outcome guarantees are claimed. **No prices and no bank account details are published anywhere** on the site; all financial inquiries are handled directly on a private consultation basis.

---

## 🚀 Key Features

1. **Zero-Configuration Fallback Architecture:**
   - Every route, catalog item, blog post, and daily prayer works seamlessly straight out of the repository even without Sanity CMS or Resend API keys.
   - Built-in static fallbacks live in `src/content/`.
2. **Multi-Language Support (i18n):**
   - Instant language switching across **English**, **Arabic (العربية)**, **Yoruba (Èdè Yorùbá)**, and **Hausa (Harshen Hausa)**.
   - Full RTL (Right-to-Left) mirroring and Arabic font switching when Arabic is selected.
3. **Daily Rotating Dua of the Day:**
   - Automatically displays an inspiring Quranic dua keyed to the day-of-the-year in Africa/Lagos time (GMT+1).
   - Features one-click copying and WhatsApp sharing.
4. **Interactive WhatsApp Order Drawer:**
   - Visitors can browse all 12 authentic herbal wellness products, add items to their personal order inquiry, and initiate a pre-filled, personalized WhatsApp consultation order message with zero friction.
5. **Consultation Booking System:**
   - Dedicated booking portal at `/book` with form validation (`react-hook-form` + `zod`).
   - Dispatches email alerts to Alfacairo via Resend when configured, while instantly generating a WhatsApp direct confirmation link for the seeker.
6. **Embedded Sanity Studio:**
   - Accessible directly at `/studio` for live content editing without external dashboards.
7. **SEO & Discovery:**
   - Dynamic sitemap (`/sitemap.xml`), robots.txt (`/robots.txt`), and full RSS feed (`/rss.xml`).

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 + Custom Vanilla CSS Variables
- **Icons:** `@phosphor-icons/react`
- **CMS:** Sanity Studio v3 (`next-sanity`, `@sanity/client`)
- **Email:** Resend API
- **Form Handling:** React Hook Form + Zod resolvers
- **Delight & Micro-interactions:** Canvas Confetti

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory (see `.env.example` for reference):

```bash
# Sanity CMS (Optional — site falls back to src/content if unset)
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN="your_read_token"
SANITY_REVALIDATE_SECRET="your_webhook_secret"

# Resend Email (Optional — falls back to direct WhatsApp booking if unset)
RESEND_API_KEY="re_123456789"
ADMIN_EMAIL="alfacairo01@gmail.com"

# Public Site URL
NEXT_PUBLIC_SITE_URL="https://alfacairoprayer.com"
```

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production (checks TypeScript and Next.js routes)
npm run build

# 4. Seed draft sample posts & duas into Sanity (optional)
npm run seed
```

Open [http://localhost:3000](http://localhost:3000) to view the website.
Access [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

---

## 📖 Alfacairo Owner Guide (Plain English)

Welcome, Alfacairo! This website was designed specifically so that you or your administrative team can easily manage content, prayers, and products without writing a single line of code.

### 1. How to Log Into Your Content Dashboard
1. Go to `https://your-website-domain.com/studio` in any web browser.
2. Sign in with your Google or Sanity account.
3. You will see your content menu on the left:
   - **Articles & Sermons (Post):** Your written blog teachings and spiritual reflections.
   - **Daily Duas (Dua):** Quranic prayers for daily spiritual upliftment.
   - **Herbal Remedies (Product):** Your traditional wellness remedies and flyers.
   - **Testimonials:** Verified feedback and praise from clients.
   - **Audio & Video Lectures (Media Item):** Links to YouTube or Facebook sermons.
   - **General Site Settings:** Update your phone number, WhatsApp link, or sanctuary address.

### 2. How to Add a New Blog Post / Sermon
1. In the Studio, click on **Articles & Sermons** and press the **Create** (pen) button.
2. Enter the **Title** (e.g., *"The Spiritual Blessings of Tahajjud Prayer"*).
3. The slug will automatically generate.
4. Set the **Author** to `Alfacairo`.
5. In the content editor, write your article.
6. **To insert an Arabic Quranic verse:**
   - In the text toolbar, click **Add Item** and select **Arabic Passage**.
   - Paste the Arabic text with vowels (Tashkeel).
   - Add the English translation and Surah reference (e.g., *Surah Al-Baqarah 2:286*).
7. Upload a cover photo and click **Publish** (bottom right green button). Your post will instantly appear on `/blog` and in the RSS feed.

### 3. How to Update or Add Herbal Products
1. Click **Herbal Remedies** in the Studio.
2. Open any existing product (e.g., *Gbogbonise Herbal Mixture*) or create a new one.
3. You can edit the description, traditional benefits, directions, and upload high-resolution photos or flyers.
4. Remember: **Never add prices or bank accounts** in the description. Visitors will click "Order via WhatsApp" to discuss pricing with you directly.

### 4. How the WhatsApp Order Drawer Works
- When a visitor views your products page, they can tap **"Add to WhatsApp Inquiry"** on any item.
- When they are ready, they tap the floating bag icon, review their list, and tap **"Send Order via WhatsApp"**.
- This opens WhatsApp with a pre-typed message listing every product they selected, so you know exactly what they need before you reply.

### 5. Managing Consultation Bookings
- When seekers fill out the form at `/book`:
  1. An instant notification is sent to your email (`ADMIN_EMAIL`).
  2. The seeker is provided a button that immediately opens WhatsApp with their booking reservation details filled out.
  3. You can verify your calendar and confirm their appointment date.

---

## 🛡️ Iconography Policy (Strict)

- All icons across every component and page must use **Phosphor Icons** (`@phosphor-icons/react` or `@phosphor-icons/react/dist/ssr`).
- Under no circumstances should Lucide or other third-party icon libraries be installed or imported.
- Always use standard Phosphor weights (`regular`, `bold`, `fill`, `duotone`) appropriate to the UI state.

---

## 🚢 Deployment to Vercel

1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Under **Environment Variables**, add the variables specified in `.env.example`.
5. Click **Deploy**. Vercel will automatically build the Next.js application and provide a production HTTPS URL.
6. Configure your custom domain (e.g. `alfacairoprayer.com`) in the Vercel Domains dashboard.

---

© 2026 Solution Spiritual Healing & Prayer (Alfacairo). All rights reserved.
