import { SanityService } from '@/lib/services/SanityService';
import { AuthorProfile } from '@/components/AuthorProfile';
import BlogContent from '@/components/BlogContent';
import { Metadata } from 'next';


type MetadataProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const slug = params.slug;
  const sanityService = SanityService.getInstance();
  const singlePost = await sanityService.getSinglePost(slug).then(data => data[0]);
  return {
    title: singlePost.title,
    description: singlePost.smallDescription,
  };
}

export default async function SingleBlog({ params: { slug } }: any) {
  const sanityService = SanityService.getInstance();
  const singlePost = await sanityService.getSinglePost(slug).then(data => data[0]);

  return (
    <div>
      <div className="prose mx-auto">
        <h1 className="text-4xl font-bold mb-4">{ singlePost.title }</h1>
        <p>{ singlePost.smallDescription }</p>
        <div className="not-prose">
          <AuthorProfile
            name={ singlePost.author.fullName }
            profileImage={ singlePost.author.profileImage }
          />
        </div>
      </div>
      <div className='mx-auto prose mt-6 border-b-4 pb-6'>
        <img
          src={ singlePost.thumbnail }
          alt={ singlePost.title }
          loading="lazy"
          className="object-cover w-full"
        />
      </div>
      <div className="prose mx-auto">
        <BlogContent content={ singlePost.content }></BlogContent>
      </div>
    </div>
  );
}
