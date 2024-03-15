type AuthorProfileProps = {
  name: string,
  profileImage: string,
}

export function AuthorProfile({ name, profileImage }: AuthorProfileProps) {
  return (
    <div className="flex items-center gap-4 mt-4">
      <div className="avatar ring ring-base-300 overflow-hidden rounded-full">
        <div className="w-10">
          <img src={profileImage} alt={name} className="w-full h-full object-cover"/>
        </div>
      </div>
      <span className="text-md">{ name }</span>
    </div>
  )
}