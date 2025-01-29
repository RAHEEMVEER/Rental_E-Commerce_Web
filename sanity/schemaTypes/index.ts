import { type SchemaTypeDefinition } from 'sanity';
import cars from '../cars';
import transaction from '../transaction';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars, transaction],
}
