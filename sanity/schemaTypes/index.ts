import { type SchemaTypeDefinition } from 'sanity'
import kta from './kta' // Menggunakan ./ karena berada di satu folder yang sama

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [kta],
}