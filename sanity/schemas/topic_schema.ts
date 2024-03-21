import { Rule } from "sanity";

const TopicSchema = {
  name: 'topic',
  type: 'document',
  title: 'Topic',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Topic Title',
      validation: (Rule: Rule ) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Topic slug',
      options: {
        source: 'title',
      },
      validation: (Rule: Rule ) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Topic Description',
      validation: (Rule: Rule ) => Rule.required(),
    },
  ],
}

export default TopicSchema;