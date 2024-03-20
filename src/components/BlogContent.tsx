import { client } from '@/lib/sanityClient/sanityClient';
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';

export default function BlogContent({ content }: any) {
  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) =>
        <img
          src={urlBuilder(client).image(value).url()}
          alt={value.alt}
          loading="lazy"
          className="w-full"
        />
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