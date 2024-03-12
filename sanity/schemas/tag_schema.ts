import { Rule } from "sanity";

const TagSchema = {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tag Title',
      validation: (Rule: Rule ) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Tag Description',
      validation: (Rule: Rule ) => Rule.required(),
    },
  ],
}

export default TagSchema;