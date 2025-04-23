import { siteConfig } from "@thearpitanand/config/site";

export function SchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
    ],
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.jobDescription,
    image: siteConfig.ogImage,
    alumniOf: siteConfig.alumniOf,
    knowsAbout: siteConfig.knowsAbout,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
