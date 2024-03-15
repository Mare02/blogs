import { SanityService } from '@/lib/services/SanityService';
import { PortableText } from '@portabletext/react';
import { AuthorProfile } from '@/components/AuthorProfile';

export default async function SingleBlog({ params: { slug } }: any) {
  const sanityService = SanityService.getInstance();
  const singlePost = await sanityService.getSinglePost(slug).then(data => data[0]);

  return (
    <div className="prose mx-auto px-4 md:px-0">
      <h1 className="text-4xl font-bold mb-4">{ singlePost.title }</h1>
      <p>{ singlePost.smallDescription }</p>
      <div className="not-prose">
        <AuthorProfile
          name={ singlePost.author.name }
          profileImage={ singlePost.author.profileImage }
        />
      </div>
      <div className='mx-auto mt-4'>
        <img className="w-full object-cover" src={ singlePost.thumbnail } alt={ singlePost.title } />
        <PortableText value={ singlePost.content }></PortableText>
      </div>
    </div>
  );
}
