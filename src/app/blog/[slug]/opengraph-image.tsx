import { ImageResponse } from "next/og";
import { getPostBySlug } from "@thearpitanand/lib/blog";
import { siteConfig } from "@thearpitanand/config/site";

export const alt = "Blog post cover";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.frontmatter.title ?? siteConfig.title;
  const author = post?.frontmatter.author ?? siteConfig.author;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#020617",
          padding: "80px",
          color: "#e2e8f0",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#67e8f9",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#f1f5f9",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 500,
            color: "#94a3b8",
          }}
        >
          {author}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
