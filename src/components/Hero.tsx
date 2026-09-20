import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background aesthetic shapes */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-parchment-700 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-parchment-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-sm md:text-base uppercase tracking-[0.3em] text-parchment-600 font-semibold">
            Digital Museum Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-charcoal-900 mb-6 tracking-tight"
        >
          KALA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-3xl font-serif text-charcoal-800 mb-8 max-w-2xl text-balance"
        >
          An Interactive Journey Through Indian Art
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-base md:text-lg text-charcoal-800/70 max-w-2xl mb-12"
        >
          Explore centuries of Indian creativity through artifacts, stories, techniques, and historical context.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#timeline"
            className="bg-charcoal-900 text-parchment-50 px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-charcoal-800 hover:scale-105 transition-all duration-300"
          >
            Explore the Timeline
          </a>
          <a 
            href="#artifacts"
            className="border border-charcoal-900 text-charcoal-900 px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-charcoal-900 hover:text-parchment-50 hover:scale-105 transition-all duration-300"
          >
            Discover Artifacts
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-charcoal-800/50">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-charcoal-800/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
