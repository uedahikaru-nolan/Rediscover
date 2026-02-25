import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { articles } from '../data/articles';

export default function JournalPage() {
  return (
    <div className="font-sans text-gray-800 bg-[#dcc5b0] min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#e3cdb9] to-[#cbae95] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none texture-paper"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-light text-[#6b422d] tracking-wide leading-tight mb-6">
              Interviews &<br />Journal
            </h1>
            <p className="text-[#6b422d] tracking-widest uppercase text-sm md:text-base max-w-lg font-medium leading-relaxed">
              SHARING HUMAN STORIES ABOUT LIFESTYLE, HAPPINESS, LOVE, AND MY OWN JOURNEY.
            </p>
          </div>
        </section>

        {/* Article List */}
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-[#dcc5b0]">
          <div className="max-w-5xl mx-auto space-y-16">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/journal/${article.slug}`}
                className="group block"
              >
                <article className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full aspect-[4/3] object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="text-xs tracking-widest uppercase text-[#6b422d]/60 mb-3">
                      {article.date}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-heading font-light text-[#6b422d] mb-4 leading-snug group-hover:opacity-70 transition-opacity">
                      {article.title}
                    </h2>
                    <p className="text-[#6b422d]/70 text-base leading-relaxed font-light mb-4">
                      {article.excerpt}
                    </p>
                    <span className="text-sm tracking-widest uppercase text-[#6b422d] border-b border-[#6b422d] pb-0.5">
                      Read more
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
