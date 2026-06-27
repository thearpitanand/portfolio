import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@thearpitanand/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Long-form writing on software engineering, AI, and building products by Arpit Anand.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-3 max-w-xl leading-normal text-slate-400">
          Long-form writing on software engineering, AI, and building products.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-slate-400">No posts yet. Check back soon.</p>
      ) : (
        <ol className="group/list">
          {posts.map((post, index) => (
            <li key={post.slug} className="mb-12">
              <Link
                href={`/blog/${post.slug}`}
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-400/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                <div className="z-10 flex-shrink-0 sm:col-span-2">
                  {post.coverImage ? (
                    <div className="relative h-16 w-28 flex-shrink-0 overflow-hidden rounded border-2 border-slate-200/10">
                      <Image
                        src={post.coverImage}
                        alt={`Featured image for ${post.title}`}
                        fill
                        sizes="128px"
                        className="object-cover"
                        priority={index < 3}
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-28 flex-shrink-0 items-center justify-center rounded border-2 border-slate-200/10 bg-slate-800/50 text-xs text-slate-500">
                      No Image
                    </div>
                  )}
                </div>

                <div className="z-10 sm:col-span-6">
                  <h2 className="font-medium text-slate-200 group-hover:text-cyan-300">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {post.description}
                    </p>
                  )}
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  {post.tags?.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <li key={tag} className="experience-tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
