import { SanityService } from '@/lib/services/SanityService';
import Link from 'next/link';

export default async function Home() {
  const sanityService = SanityService.getInstance();
  const posts = await sanityService.getAllPosts();

  return (
    <div className='grid grid-cols-4 gap-4'>
      {posts.map((post: any) => (
        <Link
          href={{
            pathname: `/blogs/${post.slug.current}`,
          }}
          key={ post._id }
        >
          <div className="mt-4 p-4">
            <img className="h-64 w-96 object-cover" src={ post.thumbnail } alt={ post.title } />
            <h1 className="text-2xl font-semibold">{ post.title }</h1>
            <p>{ post.slug.current }</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
