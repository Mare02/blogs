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
      smallDescription,
      slug,
      "topics": topics[] -> {
        "name": title,
        "id": _id,
        "slug": slug.current,
      },
      "author": author -> {
        fullName,
        slug,
        socialLinks,
        "profileImage": profileImage.asset->url,
      },
      "thumbnail": titleImage.asset->url,
      publishedAt
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
      "topics": topics[] -> {
        "name": title,
        "id": _id,
      },
      "author": author -> {
        fullName,
        slug,
        socialLinks,
        "profileImage": profileImage.asset->url,
      },
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

  async getAllTopics() {
    const query = groq`*[_type == "topic"]{
      _id,
      title,
      "slug": slug.current,
    }`;

    try {
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getSingleTopic(slug: string) {
    const query = groq`*[_type == "topic" && slug.current == "${slug}"] {
      _id,
      title,
      description,
      "slug": slug.current,
    }`;

    try {
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPostsByTopic(slug: string) {
    const query = groq`*[_type == "blog" && "${slug}" in topics[]->slug.current] {
      _id,
      title,
      smallDescription,
      slug,
      "topics": topics[] -> {
        "name": title,
        "id": _id,
        "slug": slug.current,
      },
      "author": author -> {
          fullName,
          slug,
          socialLinks,
          "profileImage": profileImage.asset->url,
      },
      "thumbnail": titleImage.asset->url,
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