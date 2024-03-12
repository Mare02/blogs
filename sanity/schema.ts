import { type SchemaTypeDefinition } from 'sanity';
import BlogSchema from './schemas/blog_schema';
import TagSchema from './schemas/tag_schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    BlogSchema,
    TagSchema
  ],
}
