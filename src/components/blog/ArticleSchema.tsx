import { siteConfig } from "@thearpitanand/config/site";
import type { BlogFrontmatter } from "@thearpitanand/types/blog";

interface ArticleSchemaProps {
  frontmatter: BlogFrontmatter;
}

function toAbsolute(url?: string): string {
  if (!url) return siteConfig.ogImage;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${siteConfig.url}${url.startsWith("/") ? "" : "/"}${url}`;
}

export function ArticleSchema({ frontmatter }: ArticleSchemaProps) {
  const pageUrl = `${siteConfig.url}/blog/${frontmatter.slug}`;
  const image = toAbsolute(frontmatter.ogImage ?? frontmatter.coverImage);
  const keywords = [...(frontmatter.tags ?? []), ...(frontmatter.keywords ?? [])]
    .join(", ");

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.updated ?? frontmatter.date,
    author: {
      "@type": "Person",
      name: frontmatter.author ?? siteConfig.author,
      url: siteConfig.url,
    },
    image,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    keywords,
    publisher: {
      "@type": "Person",
      name: siteConfig.author,
      url: siteConfig.url,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: frontmatter.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
