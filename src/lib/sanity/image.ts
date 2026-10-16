import imageUrlBuilder from '@sanity/image-url';
import { sanityClient, isSanityConfigured } from './client';

const builder = isSanityConfigured() ? imageUrlBuilder(sanityClient) : null;

export function getImageUrl(source: any, widthOrFallback?: number | string, height?: number): string {
  const fallback = typeof widthOrFallback === 'string' ? widthOrFallback : '';
  if (!source) return fallback;
  if (typeof source === 'string') return source;
  if (source?.url) return source.url;

  if (!builder || !source?.asset) return fallback;

  try {
    let img = builder.image(source).auto('format');
    if (typeof widthOrFallback === 'number') img = img.width(widthOrFallback);
    if (typeof height === 'number') img = img.height(height);
    return img.fit('max').url();
  } catch {
    return fallback;
  }
}

