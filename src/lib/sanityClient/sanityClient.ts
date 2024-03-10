import { createClient, SanityClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../../../sanity/env';

// Create the client instance immediately
let clientInstance: SanityClient | null = null;
if (!clientInstance) {
  clientInstance = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });
}

// Export the instance
export const client = clientInstance;