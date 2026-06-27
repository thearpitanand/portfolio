import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { getPostBySlug, getPostSlugs } from "@thearpitanand/lib/blog";
import { mdxComponents } from "@thearpitanand/components/blog/MdxComponents";
import { ArticleSchema } from "@thearpitanand/components/blog/ArticleSchema";
import { siteConfig } from "@thearpitanand/config/site";
import type { BlogFrontmatter } from "@thearpitanand/types/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const { frontmatter } = post;
  const keywords = [
    ...(frontmatter.tags ?? []),
    ...(frontmatter.keywords ?? []),
  ];
  const images = frontmatter.ogImage ?? frontmatter.coverImage;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: frontmatter.title,
      description: frontmatter.description,
      url: `${siteConfig.url}/blog/${slug}`,
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.updated ?? frontmatter.date,
      authors: [frontmatter.author ?? siteConfig.author],
      ...(images ? { images: [{ url: images }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      ...(images ? { images: [images] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source: post.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [rehypePrettyCode, { theme: "github-dark" }],
        ],
      },
    },
  });

  const merged = { ...frontmatter, slug };

  return (
    <article className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-cyan-300 prose-a:no-underline hover:prose-a:underline">
      <ArticleSchema frontmatter={merged} />
      <header className="not-prose mb-10 border-b border-slate-200/10 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          {merged.title}
        </h1>
        {merged.description && (
          <p className="mt-3 text-lg leading-normal text-slate-400">
            {merged.description}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-wide text-slate-500 uppercase">
          <time dateTime={merged.date}>
            {new Date(merged.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
        {merged.tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {merged.tags.map((tag) => (
              <li key={tag} className="experience-tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>
      {content}
    </article>
  );
}
