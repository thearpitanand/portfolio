import AboutSection from "@thearpitanand/components/sections/AboutSection";
import ExperienceSection from "@thearpitanand/components/sections/ExperienceSection";
import {
  MediumPosts,
  fetchMediumPosts,
} from "@thearpitanand/components/sections/MediumPosts";

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
