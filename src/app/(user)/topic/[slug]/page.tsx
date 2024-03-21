import { SanityService } from '@/lib/services/SanityService';
import BlogsSection from '@/components/BlogsSection';

type SingleTopicProps = {
  params: {
    slug: string
  }
}

export default async function SingleTopic({ params: { slug } }: SingleTopicProps) {
  const sanityService = SanityService.getInstance();
  const postsByTopic = await sanityService.getPostsByTopic(slug);
  const currentTopic = await sanityService.getSingleTopic(slug).then(data => data[0]);
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-4">{ currentTopic.title }</h1>
        <p>{ currentTopic.description }</p>
      </div>
      <BlogsSection posts={ postsByTopic }></BlogsSection>
    </div>
  );
}