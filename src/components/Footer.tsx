import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { LogoSmall } from './Logo';

export default function Footer() {
  return (
    <footer className="py-16 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#52735b] to-[#35523d] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] mix-blend-screen pointer-events-none texture-paper"></div>
      <div className="grain-overlay-light"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <LogoSmall className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-heading font-light tracking-wider mb-4">Office</h3>
            <p className="text-base font-light leading-relaxed opacity-90">
              123 Anywhere St. Any City ST 12345<br/>
              Tel: +123-456-7890<br/>
              hello@reallygreatsite.com
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-heading font-light tracking-wider mb-4">Business hours</h3>
            <p className="text-base font-light leading-relaxed opacity-90">
              Monday - Friday: 9am - 6pm<br/>
              Saturday: 9am - 12pm
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/30 flex items-center gap-4">
          <span className="text-xl font-heading font-light tracking-wider">Get social</span>
          <a href="#" className="bg-white text-[#35523d] p-1.5 rounded-full hover:bg-gray-200 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="bg-white text-[#35523d] p-1.5 rounded-full hover:bg-gray-200 transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
