import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type {
  BlogFrontmatter,
  InternalPost,
  ListedPost,
} from "@thearpitanand/types/blog";

export const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export interface RawPost {
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
}

export function getPostBySlug(slug: string): RawPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = { ...(data as BlogFrontmatter), slug };

  return {
    frontmatter,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllPosts(): InternalPost[] {
  const slugs = getPostSlugs();

  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is RawPost => post !== null)
    .filter((post) => post.frontmatter.draft !== true)
    .map((post) => ({
      ...post.frontmatter,
      readingTime: post.readingTime,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getInternalPostsAsListed(): ListedPost[] {
  return getAllPosts().map((post) => ({
    title: post.title,
    isoDate: post.date,
    imageUrl: post.coverImage,
    href: `/blog/${post.slug}`,
    source: "internal" as const,
  }));
}
