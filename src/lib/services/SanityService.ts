import { client } from '@/lib/sanityClient/sanityClient';
import { groq } from 'next-sanity';
import ISanityService from '@/lib/interfaces/ISanityService';

export class SanityService implements ISanityService {
  private static instance: SanityService;

  public static getInstance(): SanityService {
    if (!SanityService.instance) {
      SanityService.instance = new SanityService();
    }

    return SanityService.instance;
  }
  async getAllPosts() {
    const query = groq`*[_type == "blog"]{
      _id,
      title,
      slug,
      "thumbnail": titleImage.asset->url
    }`;

    try {
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getSinglePost(slug: string) {
    const query = groq`*[_type == "blog" && slug.current == "${slug}"] {
      _id,
      title,
      slug,
      smallDescription,
      "thumbnail": titleImage.asset->url,
      content,
      publishedAt
    }`;

    try {
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}