import { client } from "../../sanity/lib/client";

async function getPosts() {
  const query = `*[_type == "blog"]{
    _id,
    title,
    slug,
    "imageUrl": titleImage.asset->url
  }`;

  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map((post: any) => (
        <div key={post._id} className="mt-4 bg-gray-100 p-4">
          <h1 className="text-2xl font-semibold">{post.title}</h1>
          <p>{post.slug.current}</p>
          <img className="h-64 w-96 object-cover" src={post.imageUrl} alt={post.title} />
        </div>
      ))}
    </div>
  );
}
