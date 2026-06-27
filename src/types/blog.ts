export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  keywords?: string[];
  category?: string;
  coverImage?: string;
  ogImage?: string;
  author?: string;
  updated?: string;
  draft?: boolean;
  summary?: string;
}

export interface InternalPost extends BlogFrontmatter {
  readingTime: string;
}

export interface ListedPost {
  title: string;
  isoDate?: string;
  imageUrl?: string;
  blockquote?: string;
  href: string;
  source: "internal" | "medium";
}
