# Personal Website SEO Optimization Plan

This document outlines the SEO tasks and required image assets for optimizing the personal brand website.

## SEO Task List

1.  **Keyword Research:**

    - Identify primary keywords (name, profession, skills, niche).
    - Identify secondary/long-tail keywords (specific services, expertise areas).

2.  **On-Page SEO:**

    - **Title Tags & Meta Descriptions:** Optimize `metadata` in `layout.tsx` and page-specific files using keywords. Keep titles < 60 chars, descriptions < 160 chars.
    - **Header Tags (H1, H2, H3...):** Use a single H1 per page. Structure content logically with H2s/H3s for sections, incorporating keywords naturally.
    - **Content Optimization:** Integrate keywords into site copy (About, Experience, etc.). Ensure high-quality, brand-reflective content. Consider adding Projects/Blog sections.
    - **Image Alt Text:** Add descriptive `alt` text with keywords to all meaningful images.
    - **Internal Linking:** Link relevant pages/sections together strategically as the site grows.

3.  **Technical SEO:**

    - **Create `robots.txt`:** Add to `/public`, allow important content, disallow irrelevant paths (e.g., `/_next/`), link to sitemap.
    - **Generate `sitemap.xml`:** Create static or dynamic sitemap listing all indexable pages. Submit to Google Search Console / Bing Webmaster Tools.
    - **Structured Data (Schema Markup):** Implement `Person` schema (JSON-LD) in layout/page. Consider `Article`, `Project` schema if applicable.
    - **Mobile-Friendliness:** Ensure responsiveness (Tailwind helps, but test).
    - **Page Speed Optimization:** Use Next.js `<Image>`, optimize assets, analyze bundles (`@next/bundle-analyzer`), ensure efficient CSS.
    - **HTTPS:** Ensure site uses HTTPS (Vercel default).
    - **Favicon:** Ensure `favicon.ico` (and potentially other formats like `apple-touch-icon.png` via metadata) are correctly implemented.

4.  **Social Media Integration (Open Graph & Twitter Cards):**

    - Configure `metadata.openGraph` and `metadata.twitter` in `layout.tsx` (and pages) for social sharing previews.

5.  **Analytics & Monitoring:**
    - Set up Google Analytics 4 (GA4).
    - Set up Google Search Console (GSC), submit sitemap, monitor performance.
