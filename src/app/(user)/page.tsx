import { SanityService } from "@/lib/services/SanityService";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import BlogsSection from "@/components/BlogsSection";

export const metadata = {
  title: "Devinarium",
  description: "Articles and tutorials for developers",
};

export default async function Home() {
  const sanityService = SanityService.getInstance();
  const posts = await sanityService.getAllPosts();
  const topics = await sanityService.getAllTopics();

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-10">
        { topics.map((topic: any) => (
          <Link href={`/topic/${topic.slug}`} key={ topic._id }>
            <Badge key={ topic._id } variant="secondary" className="bg-gray-200 p-3 hover:outline outline-1">{ topic.title }</Badge>
          </Link>
        )) }
      </div>
      <BlogsSection posts={ posts } title="Featured posts"></BlogsSection>
    </div>
  );
}
