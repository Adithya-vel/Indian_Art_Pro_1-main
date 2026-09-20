import type { ArtForm } from '../types';
import { motion } from 'framer-motion';
import { Image as ImageIcon, PaintBucket, Landmark, Shirt, Hammer, MountainSnow, BookOpen } from 'lucide-react';

interface ArtFormExplorerProps {
  onSelectForm: (form: ArtForm) => void;
}

const formConfig: { name: ArtForm; icon: any; desc: string }[] = [
  { name: 'Sculpture', icon: MountainSnow, desc: 'Stone, bronze, and terracotta figures' },
  { name: 'Painting', icon: PaintBucket, desc: 'Miniatures, murals, and canvas' },
  { name: 'Architecture', icon: Landmark, desc: 'Temples, forts, and monuments' },
  { name: 'Textiles', icon: Shirt, desc: 'Woven heritage and fabric arts' },
  { name: 'Metalwork', icon: Hammer, desc: 'Coins, jewelry, and vessels' },
  { name: 'Pottery', icon: ImageIcon, desc: 'Ceramics and earthenware' },
  { name: 'Manuscripts', icon: BookOpen, desc: 'Illustrated texts and calligraphy' },
];

export function ArtFormExplorer({ onSelectForm }: ArtFormExplorerProps) {
  return (
    <section id="art-forms" className="py-24 bg-charcoal-900 text-parchment-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Explore by Art Form</h2>
          <p className="text-parchment-100/70 max-w-2xl mx-auto">
            Discover the diverse mediums through which Indian artists have expressed their creativity across millennia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {formConfig.map((form, index) => {
            const Icon = form.icon;
            return (
              <motion.button
                key={form.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onSelectForm(form.name)}
                className="group flex flex-col items-center text-center p-6 bg-charcoal-800 border border-charcoal-700 hover:border-parchment-500 hover:bg-charcoal-800/80 transition-all duration-300 rounded-sm"
              >
                <div className="w-12 h-12 bg-charcoal-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-parchment-400 group-hover:text-parchment-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-parchment-50 mb-2">{form.name}</h3>
                <p className="text-xs text-parchment-100/50 uppercase tracking-widest">{form.desc}</p>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
