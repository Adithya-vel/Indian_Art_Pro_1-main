export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-parchment-100 py-16 mt-32 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <span className="font-serif font-bold text-3xl tracking-widest text-parchment-50">KALA</span>
          <p className="text-parchment-100/70 font-serif italic text-lg text-balance">
            "Tracing India's artistic heritage through time."
          </p>
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-widest font-medium text-parchment-100/60">
          <a href="#home" className="hover:text-parchment-50 transition-colors">Home</a>
          <a href="#timeline" className="hover:text-parchment-50 transition-colors">Timeline</a>
          <a href="#artifacts" className="hover:text-parchment-50 transition-colors">Artifacts</a>
          <a href="#about" className="hover:text-parchment-50 transition-colors">About</a>
        </div>

        <div className="text-right">
          <span className="text-xs uppercase tracking-widest text-parchment-100/40 border border-parchment-100/20 px-4 py-2 rounded-sm">
            Academic Project
          </span>
        </div>

      </div>
    </footer>
  );
}
