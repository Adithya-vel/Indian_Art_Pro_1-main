import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { ArtifactModal } from './components/ArtifactModal';
import { FilterBar } from './components/FilterBar';
import { ArtFormExplorer } from './components/ArtFormExplorer';
import { DidYouKnow } from './components/DidYouKnow';
import { About } from './components/About';
import { Footer } from './components/Footer';

import { periods } from './data/periods';
import { artifacts } from './data/artifacts';
import type { Artifact, ArtForm } from './types';
import { ArtifactCard } from './components/ArtifactCard';

function App() {
  const [activePeriodId, setActivePeriodId] = useState<string>(periods[0].id);
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtForm, setSelectedArtForm] = useState<ArtForm | ''>('');
  const [selectedFilterPeriod, setSelectedFilterPeriod] = useState<string>('');

  const handleArtifactSelect = (artifact: Artifact) => {
    setSelectedArtifact(artifact);
  };

  const handleModalClose = () => {
    setSelectedArtifact(null);
  };

  const handleNextArtifact = () => {
    if (!selectedArtifact) return;
    const currentIndex = artifacts.findIndex(a => a.id === selectedArtifact.id);
    if (currentIndex < artifacts.length - 1) {
      setSelectedArtifact(artifacts[currentIndex + 1]);
    }
  };

  const handlePrevArtifact = () => {
    if (!selectedArtifact) return;
    const currentIndex = artifacts.findIndex(a => a.id === selectedArtifact.id);
    if (currentIndex > 0) {
      setSelectedArtifact(artifacts[currentIndex - 1]);
    }
  };

  // Filter Logic
  const filteredArtifacts = useMemo(() => {
    return artifacts.filter(artifact => {
      const matchesSearch = artifact.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            artifact.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesForm = selectedArtForm === '' || artifact.artForm === selectedArtForm;
      const matchesPeriod = selectedFilterPeriod === '' || artifact.periodId === selectedFilterPeriod;
      
      return matchesSearch && matchesForm && matchesPeriod;
    });
  }, [searchQuery, selectedArtForm, selectedFilterPeriod]);

  const hasActiveFilters = searchQuery !== '' || selectedArtForm !== '' || selectedFilterPeriod !== '';

  const handleArtFormSelect = (form: ArtForm) => {
    setSelectedArtForm(form);
    document.getElementById('explore-all')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative font-sans text-charcoal-800 selection:bg-parchment-300 selection:text-charcoal-900 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {!hasActiveFilters && (
          <Timeline 
            periods={periods} 
            artifacts={artifacts} 
            activePeriodId={activePeriodId} 
            onPeriodSelect={setActivePeriodId}
            onArtifactSelect={handleArtifactSelect}
          />
        )}

        {/* Global Explorer Section */}
        <section id="explore-all" className="py-24 bg-parchment-100 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-4">Collection Explorer</h2>
              <p className="text-charcoal-800/70">Browse the entire collection across all periods and mediums.</p>
            </div>
            
            <FilterBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedArtForm={selectedArtForm}
              setSelectedArtForm={setSelectedArtForm}
              selectedPeriod={selectedFilterPeriod}
              setSelectedPeriod={setSelectedFilterPeriod}
              periods={periods}
            />

            {filteredArtifacts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                {filteredArtifacts.map(artifact => (
                  <ArtifactCard 
                    key={`explorer-${artifact.id}`} 
                    artifact={artifact} 
                    onClick={() => handleArtifactSelect(artifact)} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg border border-parchment-200">
                <p className="text-lg text-charcoal-800/60 font-serif italic">No artifacts found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedArtForm('');
                    setSelectedFilterPeriod('');
                  }}
                  className="mt-4 text-sm font-semibold uppercase tracking-widest text-parchment-700 hover:text-charcoal-900 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        <ArtFormExplorer onSelectForm={handleArtFormSelect} />
        <DidYouKnow />
        <About />
      </main>

      <Footer />

      {/* Modals */}
      <ArtifactModal 
        artifact={selectedArtifact} 
        onClose={handleModalClose}
        onNext={handleNextArtifact}
        onPrev={handlePrevArtifact}
        hasNext={selectedArtifact ? artifacts.findIndex(a => a.id === selectedArtifact.id) < artifacts.length - 1 : false}
        hasPrev={selectedArtifact ? artifacts.findIndex(a => a.id === selectedArtifact.id) > 0 : false}
      />
    </div>
  );
}

export default App;
