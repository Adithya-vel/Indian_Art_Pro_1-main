export type ArtForm = 'Sculpture' | 'Painting' | 'Architecture' | 'Textiles' | 'Metalwork' | 'Pottery' | 'Manuscripts';

export interface Artifact {
  id: string;
  name: string;
  periodId: string;
  date: string;
  region: string;
  artForm: ArtForm;
  material: string;
  image: string;
  shortDescription: string;
  historicalContext: string;
  culturalSignificance: string;
  interestingFact: string;
}

export interface Period {
  id: string;
  name: string;
  dateRange: string;
  description: string;
  image: string;
}
