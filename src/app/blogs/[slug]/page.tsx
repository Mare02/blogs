import { SanityService } from '@/lib/services/SanityService';
import { PortableText } from '@portabletext/react';

export default async function SingleBlog({params: {slug}}: any) {
  const sanityService = SanityService.getInstance();
  const singlePostData = await sanityService.getSinglePost(slug);
  const singlePost = singlePostData[0];

  return (
    <div>
      <div key={singlePost._id} className="mt-4 bg-gray-100 p-4">
        <h1 className="text-2xl font-semibold">{singlePost.title}</h1>
        <p>{singlePost.slug.current}</p>
        <img className="h-64 w-96 object-cover" src={singlePost.thumbnail} alt={singlePost.title} />

        <PortableText value={singlePost.content}></PortableText>
      </div>
    </div>
  );
}
