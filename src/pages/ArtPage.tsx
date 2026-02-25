import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const artworks = [
  { src: '/images/IMG_4056.jpg', alt: 'Art Sneakers', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/IMG_5667.jpg', alt: 'Artwork' },
  { src: '/images/IMG_7611.jpg', alt: 'Artwork' },
  { src: '/images/IMG_7616.jpg', alt: 'Artwork' },
  { src: '/images/PhotoRoom_20230409_072958.jpg', alt: 'Artwork' },
  { src: '/images/IMG_8059.jpg', alt: 'Artwork' },
  { src: '/images/PhotoRoom_20230409_082022.jpg', alt: 'Artwork' },
  { src: '/images/PhotoRoom_20230409_110504.jpg', alt: 'Artwork' },
  { src: '/images/IMG_5561.jpg', alt: 'Artwork' },
];

export default function ArtPage() {
  return (
    <div className="font-sans text-gray-800 bg-[#161616] min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-[#161616] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] mix-blend-screen pointer-events-none texture-paper"></div>
          <div className="grain-overlay-light"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-light tracking-[0.4em] text-white uppercase mb-6">
              A R T
            </h1>
            <p className="text-lg leading-relaxed max-w-lg font-light text-gray-400">
              My artwork is inspired by people's stories. Through painting and
              visual expression, I explore emotions, memories, and the moments
              of life. Each piece is created from encounters with people and the
              lives they live.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-4 md:px-8 lg:px-16 pb-20 bg-[#161616]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {artworks.map((art, index) => (
              <div
                key={index}
                className={`overflow-hidden group ${art.span ?? ''}`}
              >
                <img
                  src={art.src}
                  alt={art.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
