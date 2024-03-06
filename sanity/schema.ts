import { type SchemaTypeDefinition } from 'sanity'
import BlogSchema from './schemas/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ BlogSchema ],
}
