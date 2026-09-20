import { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Artifacts', href: '#artifacts' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-parchment-50/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-charcoal-900" />
            <span className="font-serif font-bold text-2xl tracking-widest text-charcoal-900">KALA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm uppercase tracking-wider font-medium text-charcoal-800 hover:text-parchment-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#timeline"
              className="bg-charcoal-900 text-parchment-50 px-5 py-2 text-sm uppercase tracking-wider font-medium hover:bg-charcoal-800 transition-colors"
            >
              Explore Timeline
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-charcoal-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-parchment-50 shadow-lg border-t border-parchment-200"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base uppercase tracking-wider font-medium text-charcoal-800 hover:bg-parchment-100 hover:text-parchment-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#timeline"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-center bg-charcoal-900 text-parchment-50 px-5 py-3 text-sm uppercase tracking-wider font-medium hover:bg-charcoal-800 transition-colors"
              >
                Explore Timeline
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
