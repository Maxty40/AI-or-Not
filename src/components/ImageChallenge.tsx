import React, { useEffect, useState } from 'react';
import { ZoomIn, ZoomOut, Eye, Sparkles } from 'lucide-react';
import { ImageChallengeItem } from '../types';
import { sound } from '../utils/soundEffects';

const FALLBACK_IMAGE_URL = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80';

interface ImageChallengeProps {
  item: ImageChallengeItem;
  roundNumber: number;
}

export const ImageChallenge: React.FC<ImageChallengeProps> = ({ item, roundNumber }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState(item.imageUrl);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setIsLoaded(false);
    setImageUrl(item.imageUrl);
    setIsZoomed(false);
    setZoomCoords({ x: 50, y: 50 });
  }, [item.id, item.imageUrl]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));
    setZoomCoords({ x, y });
  };

  const toggleZoom = () => {
    sound.playClick();
    setIsZoomed(!isZoomed);
  };

  return (
    <div id="image-challenge-card" className="w-full flex flex-col items-center">
      {/* Top Bar above image */}
      <div className="w-full flex items-center justify-between gap-2 mb-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="bg-indigo-950/80 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-md font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Ronde {roundNumber}</span>
          </span>
          <span className="text-slate-400 bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700/60 font-medium">
            {item.category}
          </span>
        </div>

        <button
          id="toggle-zoom-btn"
          onClick={toggleZoom}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium transition-all ${
            isZoomed
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
              : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:text-white'
          }`}
          title="Perbesar gambar untuk melihat detail"
        >
          {isZoomed ? (
            <>
              <ZoomOut className="w-3.5 h-3.5 text-cyan-400" />
              <span>Normal</span>
            </>
          ) : (
            <>
              <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Kaca Pembesar</span>
            </>
          )}
        </button>
      </div>

      {/* The Image Container */}
      <div
        id="image-stage-wrapper"
        onMouseMove={handleMouseMove}
        onClick={toggleZoom}
        className={`relative w-full max-h-[560px] h-[380px] sm:h-[540px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex items-center justify-center cursor-zoom-in group select-none transition-all ${
          isZoomed ? 'ring-2 ring-cyan-500/40' : ''
        }`}
      >
        {/* Skeleton Shutter Placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 animate-pulse text-slate-500">
            <Eye className="w-8 h-8 mb-2 animate-bounce text-slate-600" />
            <span className="text-xs font-mono">Memuat citra resolusi tinggi...</span>
          </div>
        )}

        {/* Main Image */}
        <img
          id="challenge-image-element"
          key={item.id}
          src={imageUrl}
          alt={item.title}
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            if (imageUrl !== FALLBACK_IMAGE_URL) {
              setImageUrl(FALLBACK_IMAGE_URL);
              return;
            }
            setIsLoaded(true);
          }}
          className={`w-full h-full object-cover transition-transform duration-200 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={
            isZoomed
              ? {
                  transform: 'scale(2.4)',
                  transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%`,
                  cursor: 'crosshair',
                }
              : {
                  transform: 'scale(1)',
                }
          }
        />

        {/* Floating Hint Overlay on Hover */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="text-[11px] text-slate-200 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800">
            {item.title}
          </span>
          <span className="text-[10px] text-cyan-300/90 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-md border border-cyan-500/20">
            {isZoomed ? 'Geser mouse untuk telusuri detail' : 'Klik gambar untuk kaca pembesar'}
          </span>
        </div>
      </div>
    </div>
  );
};
