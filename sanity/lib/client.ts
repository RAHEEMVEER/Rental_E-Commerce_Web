import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion,
  useCdn: false,
});