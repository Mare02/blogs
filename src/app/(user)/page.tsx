import { SanityService } from "@/lib/services/SanityService";
import Link from "next/link";

export default async function Home() {
  const sanityService = SanityService.getInstance();
  const posts = await sanityService.getAllPosts();

  return (
    <div className="px-10 2xl:container mx-auto">
      <h1 className="text-4xl font-semibold mb-10">Featured blogs</h1>
      <div className="grid grid-cols-2 gap-4">
        {posts.map((post: any) => (
          <Link
            href={{
              pathname: `/blogs/${post.slug.current}`,
            }}
            key={ post._id }
          >
            <div className="card overflow-hidden relative w-full h-[500px] bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-full object-cover" src={ post.thumbnail } alt={ post.title } />
              </figure>
              <div className="absolute flex flex-col justify-between p-6 inset-0 bg-black/40">
                <div className="flex items-center gap-3 font-semibold">
                  <div
                    className="badge p-3"
                  >
                    Jan 21, 2024
                  </div>
                  {post.tags?.map((tag: any) => (
                    <div
                      key={ tag.id }
                      className="badge badge-outline text-white p-3"
                    >
                      { tag.name }
                    </div>
                  ))}
                </div>
                <h2 className="text-3xl drop-shadow-md text-white font-semibold line-clamp-2 px-2 py-1">{ post.title }</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
