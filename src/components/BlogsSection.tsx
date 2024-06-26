import { AuthorProfile } from "@/components/AuthorProfile";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";

export default function BlogsSection({ posts, title }: any) {
  return (
    <div>
      {title && <h1 className="text-4xl font-semibold mb-10">{ title }</h1>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post: any, index: number) => (
          <Link
            href={{
              pathname: `/blogs/${post.slug.current}`,
            }}
            key={ post._id }
            className={`
              ${index === 0 ? "row-span-2" : "row-span-1 max-h-[350px] overflow-hidden"}
            `}
          >
            <div className="overflow-hidden relative w-full h-full bg-base-100 shadow-xl">
              <figure className="w-full h-full">
                <img className="w-full h-full object-cover" src={ post.thumbnail } alt={ post.title } />
              </figure>
              <div className="absolute flex flex-col justify-between p-6 inset-0 bg-black/40">
                <div className="flex items-center flex-wrap gap-2">
                  <Badge variant="secondary">{ post.publishedAt.split("T")[0] }</Badge>
                  { post.topics[0] && (<Badge key={ post.topics[0].id }>{ post.topics[0].name }</Badge>) }
                </div>
                <div className="text-white">
                  <h2 className="text-2xl drop-shadow-lg font-semibold line-clamp-2">{ post.title }</h2>
                  <AuthorProfile
                    name={ post.author.fullName }
                    profileImage={ post.author.profileImage }
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}