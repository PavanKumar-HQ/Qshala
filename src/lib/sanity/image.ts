import imageUrlBuilder from '@sanity/image-url';
import { sanityClient, isSanityConfigured } from './client';

const builder = isSanityConfigured() ? imageUrlBuilder(sanityClient) : null;

function urlForImage(source: any) {
  if (!builder || !source || !source.asset) {
    return null;
  }
  try {
    return builder.image(source);
  } catch {
    return null;
  }
}

export function getImageUrl(source: any, widthOrFallback?: number | string, height?: number): string {
  const fallback = typeof widthOrFallback === 'string' ? widthOrFallback : '';
  if (!source) return fallback;
  if (typeof source === 'string') return source;
  if (typeof source.url === 'string') return source.url;
  
  const built = urlForImage(source);
  if (!built) return fallback;

  let img = built.auto('format');
  if (typeof widthOrFallback === 'number') img = img.width(widthOrFallback);
  if (typeof height === 'number') img = img.height(height);
  return img.fit('max').url();
}
