import type { Artifact } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Info } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ArtifactModalProps {
  artifact: Artifact | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function ArtifactModal({ artifact, onClose, onNext, onPrev, hasNext, hasPrev }: ArtifactModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    if (artifact) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [artifact, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!artifact) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex bg-parchment-50"
      >
        {/* Navigation & Controls */}
        <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
          <button 
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-3 bg-white/50 backdrop-blur-md rounded-full hover:bg-white text-charcoal-900 transition-colors shadow-sm"
            aria-label="Toggle zoom"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
          <button 
            onClick={onClose}
            className="p-3 bg-white/50 backdrop-blur-md rounded-full hover:bg-white text-charcoal-900 transition-colors shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {hasPrev && (
          <button 
            onClick={onPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/50 backdrop-blur-md rounded-full hover:bg-white text-charcoal-900 transition-colors shadow-sm hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {hasNext && (
          <button 
            onClick={onNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/50 backdrop-blur-md rounded-full hover:bg-white text-charcoal-900 transition-colors shadow-sm hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row w-full h-full">
          
          {/* Image Section */}
          <div className={`relative flex-1 bg-charcoal-900 flex items-center justify-center overflow-hidden transition-all duration-500 ${isZoomed ? 'lg:flex-[2]' : 'lg:flex-[1.5]'}`}>
            <motion.img 
              key={artifact.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: isZoomed ? 1.5 : 1 }}
              transition={{ duration: 0.5 }}
              src={artifact.image} 
              alt={artifact.name}
              className={`max-w-full max-h-full object-contain ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>

          {/* Details Section */}
          <div className={`flex-1 overflow-y-auto bg-parchment-50 border-l border-parchment-200 transition-all duration-500 ${isZoomed ? 'lg:max-w-md' : 'lg:max-w-2xl'}`}>
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-parchment-200 text-xs font-semibold uppercase tracking-widest text-charcoal-900 mb-4">
                    {artifact.artForm}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-2">{artifact.name}</h2>
                  <div className="flex flex-col gap-1 text-sm uppercase tracking-wider text-charcoal-800/60 font-medium mt-4">
                    <span>Date: <span className="text-charcoal-900">{artifact.date}</span></span>
                    <span>Region: <span className="text-charcoal-900">{artifact.region}</span></span>
                    <span>Material: <span className="text-charcoal-900">{artifact.material}</span></span>
                  </div>
                </div>

                <div className="space-y-8 text-charcoal-800">
                  <section>
                    <h3 className="text-lg font-serif font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5 text-parchment-600" /> Historical Context
                    </h3>
                    <p className="leading-relaxed text-charcoal-800/90">{artifact.historicalContext}</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-serif font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5 text-parchment-600" /> Cultural Significance
                    </h3>
                    <p className="leading-relaxed text-charcoal-800/90">{artifact.culturalSignificance}</p>
                  </section>

                  <div className="bg-parchment-100 p-6 rounded-sm border-l-4 border-parchment-600">
                    <span className="text-xs uppercase tracking-widest font-bold text-parchment-700 block mb-2">Did You Know?</span>
                    <p className="text-charcoal-900 italic font-serif leading-relaxed">
                      "{artifact.interestingFact}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
