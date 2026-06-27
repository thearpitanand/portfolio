import AboutSection from "@thearpitanand/components/sections/AboutSection";
import ExperienceSection from "@thearpitanand/components/sections/ExperienceSection";
import {
  MediumPosts,
  fetchMediumPosts,
} from "@thearpitanand/components/sections/MediumPosts";
import { getInternalPostsAsListed } from "@thearpitanand/lib/blog";

/**
 * Revalidate the page every 24 hours
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating
 */
export const revalidate = 86400;

export default async function Home() {
  const [medium, internal] = await Promise.all([
    fetchMediumPosts("thearpitanand"),
    Promise.resolve(getInternalPostsAsListed()),
  ]);

  const posts = [...internal, ...medium].sort((a, b) =>
    (b.isoDate ?? "").localeCompare(a.isoDate ?? ""),
  );

  return (
    <main>
      <AboutSection />
      <ExperienceSection />
      <MediumPosts posts={posts} />
    </main>
  );
}
