import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 bg-parchment-100 border-y border-parchment-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-8">
            About KALA
          </h2>
          
          <div className="space-y-6 text-lg text-charcoal-800/80 leading-relaxed font-sans max-w-3xl mx-auto text-balance">
            <p>
              <strong className="font-semibold text-charcoal-900">KALA</strong> is an educational interactive experience designed to help users explore the evolution of Indian art through time. 
            </p>
            <p>
              Created as an academic interactive digital humanities and art-history project, KALA aims to contextualize key historical artifacts across different periods—from the ancient Indus Valley Civilization to the vibrant Modern art movements. 
            </p>
            <p>
              The timeline concept allows users to virtually journey through millennia of creativity, providing a digital museum experience that highlights not just the art itself, but the rich cultural significance, sophisticated techniques, and historical context that shaped it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
