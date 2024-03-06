const BlogSchema = {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug of the article',
      options: {
        source: 'title',
      }
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title image of the article',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small description image of the article',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        }
      ]
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    },
  ]
}

export default BlogSchema;