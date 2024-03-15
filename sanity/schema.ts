import { type SchemaTypeDefinition } from 'sanity';
import BlogSchema from './schemas/blog_schema';
import TopicSchema from './schemas/topic_schema';
import UserSchema from './schemas/user_schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    BlogSchema,
    TopicSchema,
    UserSchema,
  ],
}
