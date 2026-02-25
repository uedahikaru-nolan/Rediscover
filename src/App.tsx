/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="grid grid-cols-2 gap-1 w-12 h-12">
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="border-[1.5px] border-white"></div>
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-3xl font-bold tracking-[0.2em] leading-none mb-1">REDISCOVER</span>
      <span className="text-sm tracking-[0.3em] leading-tight">HIDDEN<br/>STORIES</span>
    </div>
  </div>
);

const LogoSmall = ({ className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="grid grid-cols-2 gap-1 w-10 h-10">
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="border-[1.5px] border-white"></div>
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-xl font-bold tracking-[0.2em] leading-tight">HIDDEN<br/>STORIES</span>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-[#dcc5b0]">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex flex-col text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 flex-1 flex flex-col w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex-1 flex items-center justify-center">
            <Logo />
          </div>
          <div className="w-full flex justify-end pb-16">
            <p className="text-right text-base md:text-lg tracking-widest uppercase font-medium leading-relaxed">
              Creating stories and art<br/>from real lives.
            </p>
          </div>
        </div>
      </section>

      {/* Interviews & Journal Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#e3cdb9] to-[#cbae95] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none texture-paper"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2 className="text-5xl md:text-6xl font-heading font-light text-[#6b422d] tracking-wide leading-tight">
              Interviews &<br/>Journal
            </h2>
            <p className="text-[#6b422d] tracking-widest uppercase text-sm md:text-base max-w-md font-medium leading-relaxed pb-2">
              SHARING HUMAN STORIES ABOUT LIFESTYLE, HAPPINESS, LOVE, AND MY OWN JOURNEY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-4 shadow-sm">
              <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop" alt="Snow" className="w-full aspect-[4/3] object-cover mb-4" />
              <p className="text-sm text-gray-800 font-medium">Do you remember your childhood dreams?</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-4 shadow-sm flex flex-col">
              <img src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=800&auto=format&fit=crop" alt="Field" className="w-full aspect-[4/3] object-cover mb-4" />
              <p className="text-sm text-gray-800 font-bold mb-1">My Aunt's First Love in 15 Years</p>
              <p className="text-[10px] text-gray-600 leading-tight">In the summer of 2023, I got a call from my aunt.<br/>"Please don't tell your mother," she whispered.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow-sm">
              <img src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=800&auto=format&fit=crop" alt="Food" className="w-full aspect-[4/3] object-cover mb-4" />
              <p className="text-sm text-gray-800 font-medium">Living Simply: Making Salsa from Scratch in Mexico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Art Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-[#161616] text-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] mix-blend-screen pointer-events-none texture-paper"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-[0.4em] mb-12 text-white uppercase">A R T</h2>
            <p className="text-lg leading-relaxed max-w-md font-light text-gray-400">
              My artwork is inspired by people's stories.<br/>
              Through painting and visual expression, I explore emotions,<br/>
              memories, and the moments of life.<br/>
              Each piece is created from encounters with people and the lives<br/>
              they live.
            </p>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000&auto=format&fit=crop" alt="Art" className="w-full h-auto object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#e3cdb9] to-[#cbae95] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none texture-paper"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-heading font-light text-[#6b422d] tracking-wide mb-16 uppercase">ABOUT</h2>
          
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/3">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Portrait" className="w-full aspect-[4/5] object-cover shadow-lg" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col items-start">
              <p className="text-[#6b422d] text-lg md:text-xl leading-relaxed font-light max-w-2xl mb-12">
                Hikaru Hatanaka explores human lives,<br/>
                cultures, and emotions through<br/>
                interviews, essays, art, and film.<br/>
                Through Rediscover : Hidden Stories,<br/>
                real lives are documented and<br/>
                expressed through stories and visual<br/>
                works.
              </p>
              <button className="border border-[#6b422d] text-[#6b422d] px-8 py-3 tracking-widest text-sm hover:bg-[#6b422d] hover:text-[#e3cdb9] transition-colors duration-300 uppercase">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#52735b] to-[#35523d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] mix-blend-screen pointer-events-none texture-paper"></div>
        
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
    </div>
  );
}
