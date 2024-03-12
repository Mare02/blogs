import { SanityService } from '@/lib/services/SanityService';
import { PortableText } from '@portabletext/react';

export default async function SingleBlog({ params: { slug } }: any) {
  const sanityService = SanityService.getInstance();
  const singlePost = await sanityService.getSinglePost(slug).then(data => data[0]);

  return (
    <div className="container mx-auto py-10 prose px-2  md:px-0">
      <h1 className="text-4xl font-bold">{ singlePost.title }</h1>
      <p className="py-4">{ singlePost.slug.current }</p>
      <img className="w-full object-cover mb-10" src={ singlePost.thumbnail } alt={ singlePost.title } />

      <PortableText value={ singlePost.content }></PortableText>
    </div>
  );
}
