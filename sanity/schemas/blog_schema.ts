import { Rule } from "sanity";

const BlogSchema = {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the blog article',
      validation: (Rule: Rule ) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug of the article',
      options: {
        source: 'title',
      },
      validation: (Rule: Rule ) => Rule.required(),
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title image of the article',
      validation: (Rule: Rule ) => Rule.required(),
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small description of the article',
      validation: (Rule: Rule ) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt',
            },
          ],
        },
      ],
      validation: (Rule: Rule ) => Rule.required(),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    },
    {
      name: 'topics',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'topic' }],
        },
      ],
      validation: (Rule: Rule ) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ]
}

export default BlogSchema;