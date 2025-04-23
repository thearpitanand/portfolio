# Personal Website SEO Optimization Plan

This document outlines the SEO tasks and required image assets for optimizing the personal brand website.

## SEO Task List

1.  **Keyword Research:** [✓] Initial research done. Needs review/refinement by user.

    - Identify primary keywords (name, profession, skills, niche).
    - Identify secondary/long-tail keywords (specific services, expertise areas).

2.  **On-Page SEO:**

    - **Title Tags & Meta Descriptions:** [✓] Basic layout metadata optimized. Needs keyword review.
    - **Header Tags (H1, H2, H3...):** [x] Correct structure implemented (H1 in layout, H2 in sections).
    - **Content Optimization:** [✓] Content reviewed, minor keyword integration suggested. Needs review/implementation by user.
    - **Image Alt Text:** [x] Implemented for found images (dynamic Medium posts). Uses Next.js Image.
    - **Internal Linking:** [N/A] Currently single-page structure.

3.  **Technical SEO:**

    - **Create `robots.txt`:** [x]
    - **Generate `sitemap.xml`:** [x] (Basic static sitemap created)
    - **Structured Data (Schema Markup):** [x] (`Person` schema added to layout)
    - **Mobile-Friendliness:** [ ] Requires manual testing.
    - **Page Speed Optimization:** [✓] Uses Next.js `<Image>` for dynamic images. Consider bundle analysis (`@next/bundle-analyzer`) later.
    - **HTTPS:** [x] (Vercel default)
    - **Favicon:** [x]

4.  **Social Media Integration (Open Graph & Twitter Cards):** [x]

5.  **Analytics & Monitoring:**
    - Set up Google Analytics 4 (GA4). [ ] Requires manual setup.
    - Set up Google Search Console (GSC), submit sitemap, monitor performance. [ ] Requires manual setup.
