import { SanityService } from "@/lib/services/SanityService";
import BlogsSectionHero from "@/components/BlogsSectionHero";


export default async function Home() {
  const sanityService = SanityService.getInstance();
  const posts = await sanityService.getAllPosts();

  return (
    <div>
      <BlogsSectionHero posts={ posts } title="Featured posts"></BlogsSectionHero>
    </div>
  );
}
