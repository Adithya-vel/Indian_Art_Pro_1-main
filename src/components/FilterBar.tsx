import { Search, SlidersHorizontal, X } from 'lucide-react';
import type { ArtForm, Period } from '../types';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedArtForm: ArtForm | '';
  setSelectedArtForm: (form: ArtForm | '') => void;
  selectedPeriod: string;
  setSelectedPeriod: (periodId: string) => void;
  periods: Period[];
}

export function FilterBar({ 
  searchQuery, 
  setSearchQuery, 
  selectedArtForm, 
  setSelectedArtForm,
  selectedPeriod,
  setSelectedPeriod,
  periods
}: FilterBarProps) {
  
  const artForms: ArtForm[] = ['Sculpture', 'Painting', 'Architecture', 'Textiles', 'Metalwork', 'Pottery', 'Manuscripts'];
  
  const hasActiveFilters = searchQuery !== '' || selectedArtForm !== '' || selectedPeriod !== '';

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedArtForm('');
    setSelectedPeriod('');
  };

  return (
    <div className="bg-white/80 backdrop-blur-md border border-parchment-200 p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between mb-8 sticky top-20 z-40">
      
      {/* Search */}
      <div className="relative w-full md:w-auto flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-800/50" />
        <input 
          type="text" 
          placeholder="Search artifacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-parchment-50 border border-parchment-200 rounded-md focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:border-transparent text-sm text-charcoal-900"
        />
      </div>

      {/* Filters */}
      <div className="flex w-full md:w-auto items-center gap-3 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        <div className="flex items-center gap-2 text-charcoal-800 shrink-0">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-semibold">Filter:</span>
        </div>
        
        <select 
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="bg-parchment-50 border border-parchment-200 text-charcoal-900 text-sm rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-charcoal-900 cursor-pointer shrink-0"
        >
          <option value="">All Periods</option>
          {periods.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>

        <select 
          value={selectedArtForm}
          onChange={(e) => setSelectedArtForm(e.target.value as ArtForm | '')}
          className="bg-parchment-50 border border-parchment-200 text-charcoal-900 text-sm rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-charcoal-900 cursor-pointer shrink-0"
        >
          <option value="">All Art Forms</option>
          {artForms.map(form => (
            <option key={form} value={form}>{form}</option>
          ))}
        </select>

        {hasActiveFilters && (
          <button 
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs uppercase tracking-widest font-medium text-red-700 hover:text-red-900 transition-colors shrink-0 px-2"
          >
            <X className="w-4 h-4" /> Clear
          </button>
        )}
      </div>

    </div>
  );
}
