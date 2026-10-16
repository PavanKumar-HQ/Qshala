import React, { useState, useEffect, useCallback } from 'react';
import { Download, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export interface GalleryPhoto {
  url: string;
  caption: string;
}

interface Props {
  photos: GalleryPhoto[];
  title?: string;
}

export default function EventPhotoGallery({ photos, title }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setSelectedIndex(idx);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
  }, [photos.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  const downloadImage = async (url: string, filename: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename || 'qshala-event-photo.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback: open in new tab
      window.open(url, '_blank');
    }
  };

  return (
    <div className="space-y-6">
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => handleOpen(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpen(idx);
              }
            }}
            className="group relative rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 bg-slate-100 aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#30B2E7] hover:shadow-md transition-all"
            aria-label={`View photo ${idx + 1}: ${photo.caption || 'Event photo'}`}
          >
            <img
              src={photo.url}
              alt={photo.caption || `Event photo ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            {/* Hover overlay with Open indicator & direct Download button */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-3.5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold font-heading">
                  <ZoomIn className="w-3.5 h-3.5 text-[#30B2E7]" />
                  <span>Click to Open</span>
                </span>
                <button
                  type="button"
                  onClick={(e) => downloadImage(photo.url, `qshala-event-${idx + 1}.jpg`, e)}
                  title="Download Photo"
                  aria-label="Download Photo"
                  className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-sm transition-transform active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {photo.caption && (
                <p className="text-white text-xs font-semibold leading-snug line-clamp-2 drop-shadow-xs">
                  {photo.caption}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal Viewer */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-6xl flex items-center justify-between text-white py-2 px-1 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs font-bold">
                {selectedIndex + 1} / {photos.length}
              </span>
              {title && (
                <span className="hidden sm:inline-block text-slate-300 text-xs font-bold font-heading truncate max-w-md">
                  {title}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) =>
                  downloadImage(
                    photos[selectedIndex].url,
                    `qshala-photo-${selectedIndex + 1}.jpg`,
                    e
                  )
                }
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs font-heading transition-colors cursor-pointer"
                title="Download full size photo"
              >
                <Download className="w-4 h-4 text-[#30B2E7]" />
                <span className="hidden sm:inline">Download</span>
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close (Esc)"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Photo Area with Navigation Arrows */}
          <div
            className="relative flex-grow w-full max-w-6xl flex items-center justify-center my-auto overflow-hidden px-2 sm:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all hover:scale-105 cursor-pointer border border-white/20 shadow-lg"
              title="Previous Photo (Left arrow)"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={photos[selectedIndex].url}
              alt={photos[selectedIndex].caption || 'Event photo'}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-200"
            />

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all hover:scale-105 cursor-pointer border border-white/20 shadow-lg"
              title="Next Photo (Right arrow)"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="w-full max-w-3xl text-center py-3 px-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {photos[selectedIndex].caption ? (
              <p className="text-white text-sm sm:text-base font-semibold leading-relaxed bg-black/50 backdrop-blur-xs py-2 px-4 rounded-xl border border-white/10">
                {photos[selectedIndex].caption}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
