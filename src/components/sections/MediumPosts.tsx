import Image from "next/image";
import Link from "next/link";
import {
  sectionVariants,
  sectionHeaderVariants,
  sectionHeaderTitleVariants,
} from "../ui/variants/section";
import {
  postItemVariants,
  postMetaVariants,
  postTitleVariants,
  postTitleArrowVariants,
  postImageWrapperVariants,
  postPlaceholderVariants,
  postItemHoverBackgroundVariants,
  postItemContentVariants,
} from "../ui/variants/posts";
import Parser from "rss-parser";

interface MediumPostsProps {
  posts: Post[];
}

const extractImageUrl = (content: string): string | undefined => {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : undefined;
};

const extractBlockquote = (content: string): string | undefined => {
  const blockquoteMatch = content.match(
    /<blockquote[^>]*>([\s\S]*?)<\/blockquote>/,
  );
  return blockquoteMatch ? blockquoteMatch[1] : undefined;
};

export const MediumPosts = ({ posts }: MediumPostsProps) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section id="blogs" className={sectionVariants()} aria-label="Blog Posts">
      <div className={sectionHeaderVariants()}>
        <h2 className={sectionHeaderTitleVariants()}>Medium Blogs</h2>
      </div>

      <ol className="group/list">
        {posts.slice(0, 5).map((post, index) => (
          <li key={`${post.link}-${index}`} className="mb-12">
            <div className={postItemVariants()}>
              <div className={postItemHoverBackgroundVariants()}></div>
              {/* Image/Meta info - kept in its own grid column */}
              <div className={postMetaVariants()}>
                {post.imageUrl ? (
                  <div className={postImageWrapperVariants()}>
                    <Image
                      src={post.imageUrl}
                      alt={`Featured image for ${post.title}`}
                      fill
                      sizes="128px"
                      className="object-cover"
                      priority={index < 3}
                    />
                  </div>
                ) : (
                  <div className={postPlaceholderVariants()}>No Image</div>
                )}
              </div>

              <div className={postItemContentVariants()}>
                {/* Content area - using the main grid column like ExperienceSection */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium text-slate-200">
                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={postTitleVariants()}
                      aria-label={`${post.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>{post.title}</span>
                      <span className={postTitleArrowVariants()}>↗</span>
                    </Link>
                    {post.blockquote && (
                      <blockquote className="mt-2 text-sm text-slate-400 italic">
                        {post.blockquote}
                      </blockquote>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

interface Post {
  title: string;
  link: string;
  isoDate?: string;
  imageUrl?: string;
  blockquote?: string;
}
export interface MediumPost {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  "content:encoded": string;
  "content:encodedSnippet": string;
  "dc:creator": string;
  guid: string;
  categories: string[];
  isoDate: string;
}

export async function fetchMediumPosts(username: string): Promise<Post[]> {
  const parser = new Parser();
  const feedUrl = `https://medium.com/feed/@${username}`;

  try {
    const feed = await parser.parseURL(feedUrl);
    return (feed.items as MediumPost[])
      .map(
        (item): Post => ({
          title: item.title ?? "Untitled Post",
          link: item.link ?? "#",
          isoDate: item.isoDate,
          imageUrl: extractImageUrl(
            item["content:encoded"] || item["content:encodedSnippet"] || "",
          ),
          blockquote: extractBlockquote(
            item["content:encoded"] || item["content:encodedSnippet"] || "",
          ),
        }),
      )
      .slice(0, 5);
  } catch (error) {
    console.error("Error fetching or parsing Medium RSS feed:", error);
    return [];
  }
}
