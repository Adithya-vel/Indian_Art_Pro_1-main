import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, RefreshCw } from 'lucide-react';
import { facts } from '../data/facts';

export function DidYouKnow() {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prev) => (prev + 1) % facts.length);
  };

  return (
    <section className="py-24 bg-parchment-200 border-t border-parchment-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-parchment-50 mb-8 shadow-sm text-parchment-700">
          <Lightbulb className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-12">Did You Know?</h2>
        
        <div className="bg-parchment-50 p-8 md:p-12 rounded-lg museum-shadow relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={factIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-serif text-charcoal-800 leading-relaxed italic"
            >
              "{facts[factIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        <button 
          onClick={nextFact}
          className="mt-8 flex items-center gap-2 mx-auto text-sm uppercase tracking-widest font-semibold text-charcoal-900 hover:text-parchment-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" /> Next Fact
        </button>

      </div>
    </section>
  );
}
