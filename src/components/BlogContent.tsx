import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import { client } from '@/lib/sanityClient/sanityClient';

export default function BlogContent({ content }: any) {
  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => <img className='w-full' src={urlBuilder(client).image(value).url()} alt={value.alt} />
    },
  }
  return (
    <div className='mx-auto'>
      <PortableText
        value={ content }
        components={ myPortableTextComponents }
      ></PortableText>
    </div>
  );
}