import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#52735b] to-[#3d5c44] text-white py-4 px-8 md:px-16 lg:px-24 sticky top-0 z-50 relative overflow-hidden">
      <div className="grain-overlay-light"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="grid grid-cols-2 gap-0.5 w-8 h-8">
            <div className="bg-white"></div>
            <div className="bg-white"></div>
            <div className="bg-white"></div>
            <div className="border-[1.5px] border-white"></div>
          </div>
          <span className="text-lg font-bold tracking-[0.15em]">REDISCOVER</span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link to="/journal" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
            Journal
          </Link>
          <Link to="/art" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
            Art
          </Link>
          <Link to="/about" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
