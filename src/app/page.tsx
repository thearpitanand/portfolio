import AboutSection from "@thearpitanand/components/sections/AboutSection";
import ExperienceSection from "@thearpitanand/components/sections/ExperienceSection";
import {
  MediumPosts,
  fetchMediumPosts,
} from "@thearpitanand/components/sections/MediumPosts";

/**
 * Revalidate the page every 24 hours
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating
 */
export const revalidate = 86400;

export default async function Home() {
  const mediumPosts = await fetchMediumPosts("thearpitanand");

  return (
    <main>
      <AboutSection />
      <ExperienceSection />
      <MediumPosts posts={mediumPosts} />
    </main>
  );
}
