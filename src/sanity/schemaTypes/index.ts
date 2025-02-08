import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {postType} from './postType'
import {authorType} from './authorType'
import { product } from './products'
import { Category } from './category'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType,postType, authorType,product,Category,order],
}
