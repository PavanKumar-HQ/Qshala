import { createClient } from '@sanity/client';

const projectId = 
  import.meta.env.PUBLIC_SANITY_PROJECT_ID || 
  import.meta.env.SANITY_PROJECT_ID || 
  process.env.PUBLIC_SANITY_PROJECT_ID || 
  process.env.SANITY_PROJECT_ID || 
  '';

const dataset = 
  import.meta.env.PUBLIC_SANITY_DATASET || 
  import.meta.env.SANITY_DATASET || 
  process.env.PUBLIC_SANITY_DATASET || 
  process.env.SANITY_DATASET || 
  'production';

const apiVersion = 
  import.meta.env.PUBLIC_SANITY_API_VERSION || 
  import.meta.env.SANITY_API_VERSION || 
  process.env.PUBLIC_SANITY_API_VERSION || 
  process.env.SANITY_API_VERSION || 
  '2026-03-01';

const token = 
  import.meta.env.SANITY_API_TOKEN || 
  process.env.SANITY_API_TOKEN || 
  '';

export function isSanityConfigured(): boolean {
  return Boolean(
    projectId && 
    projectId !== 'your-project-id' && 
    projectId !== 'placeholder' &&
    projectId.trim().length > 3
  );
}

export const sanityClient = createClient({
  projectId: isSanityConfigured() ? projectId : 'placeholder-id',
  dataset,
  apiVersion,
  useCdn: true,
  token: token || undefined,
  perspective: 'published',
});
