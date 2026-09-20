import type { Artifact } from '../types';
import { motion } from 'framer-motion';

interface ArtifactCardProps {
  artifact: Artifact;
  onClick: () => void;
}

export function ArtifactCard({ artifact, onClick }: ArtifactCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-sm border border-parchment-200 overflow-hidden cursor-pointer flex flex-col h-full museum-shadow transition-shadow hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden bg-charcoal-900/5">
        <div className="absolute inset-0 bg-charcoal-900/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          src={artifact.image} 
          alt={artifact.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest font-semibold text-charcoal-900 border border-white/20 shadow-sm">
            {artifact.artForm}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-serif text-xl text-charcoal-900 leading-tight mb-1 group-hover:text-parchment-700 transition-colors">
              {artifact.name}
            </h4>
            <span className="text-xs uppercase tracking-wider text-charcoal-800/60 block">
              {artifact.date} • {artifact.region}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-charcoal-800/80 line-clamp-3 mb-6 flex-1">
          {artifact.shortDescription}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-parchment-100 pt-4">
          <span className="text-xs text-charcoal-800/60 font-medium">
            {artifact.material}
          </span>
          <button className="text-xs uppercase tracking-widest font-semibold text-charcoal-900 group-hover:text-parchment-700 transition-colors flex items-center gap-1">
            Explore <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
