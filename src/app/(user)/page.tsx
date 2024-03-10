import { SanityService } from '@/lib/services/SanityService';
import Link from 'next/link';

export default async function Home() {
  const sanityService = SanityService.getInstance();
  const posts = await sanityService.getAllPosts();

  return (
    <div>
      {posts.map((post: any) => (
        <Link href={{
            pathname: `/blogs/${post.slug.current}`,
            query: {slug: post.slug.current}
        }} key={post._id}>
          <div className="mt-4 bg-gray-100 p-4">
            <h1 className="text-2xl font-semibold">{post.title}</h1>
            <p>{post.slug.current}</p>
            <img className="h-64 w-96 object-cover" src={post.thumbnail} alt={post.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}
