import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-floral-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Desktop Navigation Links (Left) */}
          <div className="hidden lg:flex flex-1 gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500">
            <a href="#" className="hover:text-primary transition-colors">Shop</a>
            <a href="#" className="hover:text-primary transition-colors">Collections</a>
            <a href="#" className="hover:text-primary transition-colors">Journal</a>
          </div>

          {/* Mobile/Tablet Hamburger (Left) */}
          <div className="lg:hidden flex-1">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 hover:bg-stone-100 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Logo (Center) */}
          <div className="text-2xl font-serif italic tracking-tighter text-primary font-bold">
            Luxe Boutique
          </div>

          {/* Right Side (Desktop: Contact, Mobile: Empty/Placeholder) */}
          <div className="flex-1 flex justify-end">
            <button className="hidden lg:block text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 hover:text-primary transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile & Tablet */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            
            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[300px] sm:w-[350px] bg-floral-white z-[70] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-8 flex justify-between items-center border-b border-stone-100">
                <span className="text-xl font-serif italic text-primary font-bold">Luxe</span>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-stone-400" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 flex flex-col gap-8">
                <div className="space-y-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Navigation</p>
                  <nav className="flex flex-col gap-6 text-2xl font-serif italic text-stone-900">
                    <a href="#" onClick={() => setIsSidebarOpen(false)} className="hover:text-primary transition-colors">Shop All</a>
                    <a href="#" onClick={() => setIsSidebarOpen(false)} className="hover:text-primary transition-colors">New Arrivals</a>
                    <a href="#" onClick={() => setIsSidebarOpen(false)} className="hover:text-primary transition-colors">Best Sellers</a>
                    <a href="#" onClick={() => setIsSidebarOpen(false)} className="hover:text-primary transition-colors">Collections</a>
                  </nav>
                </div>

                <div className="space-y-6 pt-8 border-t border-stone-100">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Company</p>
                  <nav className="flex flex-col gap-4 text-sm font-medium text-stone-600">
                    <a href="#" onClick={() => setIsSidebarOpen(false)}>About Us</a>
                    <a href="#" onClick={() => setIsSidebarOpen(false)}>Journal</a>
                    <a href="#" onClick={() => setIsSidebarOpen(false)}>Contact</a>
                    <a href="#" onClick={() => setIsSidebarOpen(false)}>Shipping Policy</a>
                  </nav>
                </div>
              </div>

              <div className="p-8 border-t border-stone-100 space-y-6">
                <div className="flex gap-4">
                  <Instagram className="w-5 h-5 text-stone-400 hover:text-primary cursor-pointer transition-colors" />
                  <Facebook className="w-5 h-5 text-stone-400 hover:text-primary cursor-pointer transition-colors" />
                  <Twitter className="w-5 h-5 text-stone-400 hover:text-primary cursor-pointer transition-colors" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400">
                  © 2024 Luxe Boutique
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
