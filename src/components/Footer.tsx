import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-2xl font-serif italic text-white font-bold">Luxe Boutique</div>
          <p className="text-sm leading-relaxed opacity-70">
            Curating the finest minimalist fashion since 2020. Our pieces are designed for the modern individual who values quality and timeless elegance.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-white text-sm uppercase tracking-widest font-bold">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white text-sm uppercase tracking-widest font-bold">Customer Care</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white text-sm uppercase tracking-widest font-bold">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" /> hello@luxeboutique.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" /> +62 812 3456 789
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1" /> 
              <span>Jl. Kemang Raya No. 10<br />Jakarta Selatan, 12730</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-50">
        <p>© 2024 Luxe Boutique. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
