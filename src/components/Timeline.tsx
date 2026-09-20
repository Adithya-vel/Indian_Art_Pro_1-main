import type { Period, Artifact } from '../types';
import { ArtifactCard } from './ArtifactCard.tsx'; 
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface TimelineProps {
  periods: Period[];
  artifacts: Artifact[];
  activePeriodId: string;
  onPeriodSelect: (id: string) => void;
  onArtifactSelect: (artifact: Artifact) => void;
}

export function Timeline({ periods, artifacts, activePeriodId, onPeriodSelect, onArtifactSelect }: TimelineProps) {
  
  const activePeriod = periods.find(p => p.id === activePeriodId) || periods[0];
  const activeArtifacts = artifacts.filter(a => a.periodId === activePeriodId);

  return (
    <section id="timeline" className="py-24 bg-parchment-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-4">The Timeline of Indian Art</h2>
          <p className="text-charcoal-800/70 max-w-2xl mx-auto">
            Journey through millennia of artistic evolution. Select a period below to explore its defining masterworks.
          </p>
        </div>

        {/* Timeline Navigation (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="relative mb-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-parchment-300 -translate-y-1/2 z-0"></div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-4 w-px bg-parchment-300 z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 md:gap-2">
            {periods.map((period) => {
              const isActive = period.id === activePeriodId;
              return (
                <button
                  key={period.id}
                  onClick={() => onPeriodSelect(period.id)}
                  className={`relative flex md:flex-col items-center gap-4 md:gap-3 group text-left md:text-center w-full md:w-auto transition-all ${
                    isActive ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {/* Node Dot */}
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors border-2 ${
                    isActive 
                      ? 'bg-charcoal-900 border-charcoal-900 text-parchment-50' 
                      : 'bg-parchment-50 border-parchment-300 text-charcoal-900 group-hover:border-charcoal-900'
                  }`}>
                    {isActive ? <div className="w-2 h-2 rounded-full bg-parchment-50" /> : <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-charcoal-400" />}
                  </div>

                  {/* Period Name & Date */}
                  <div className="flex flex-col">
                    <span className={`font-serif font-semibold text-base md:text-sm ${isActive ? 'text-charcoal-900' : 'text-charcoal-800'}`}>
                      {period.name}
                    </span>
                    <span className="text-xs text-charcoal-800/60 uppercase tracking-wider">
                      {period.dateRange}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Period Details */}
        <motion.div 
          key={activePeriodId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/50 backdrop-blur-sm border border-parchment-200 rounded-lg p-8 md:p-12 museum-shadow mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <span className="text-sm uppercase tracking-widest font-semibold text-parchment-600 mb-2 block">
                {activePeriod.dateRange}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-4">{activePeriod.name}</h3>
              <p className="text-charcoal-800/80 leading-relaxed text-lg mb-6">
                {activePeriod.description}
              </p>
              <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-charcoal-900 font-medium">
                <span>{activeArtifacts.length} Artifacts in collection</span>
              </div>
            </div>
            <div className="flex-1 w-full md:w-auto h-64 md:h-80 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-charcoal-900/10 z-10"></div>
              <img 
                src={activePeriod.image} 
                alt={activePeriod.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Artifacts Grid for Active Period */}
        <div id="artifacts" className="scroll-mt-32">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-serif text-charcoal-900">Featured Artifacts</h3>
            <a href="#explore-all" className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-charcoal-800 hover:text-charcoal-900 transition-colors">
              View All <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activeArtifacts.map(artifact => (
              <ArtifactCard 
                key={artifact.id} 
                artifact={artifact} 
                onClick={() => onArtifactSelect(artifact)} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

