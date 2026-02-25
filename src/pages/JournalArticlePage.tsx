import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { articles } from '../data/articles';

export default function JournalArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  // Find adjacent articles for navigation
  const currentIndex = articles.indexOf(article);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="font-sans text-gray-800 bg-[#dcc5b0] min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <div className="w-full h-[50vh] md:h-[60vh] relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Article Content */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-[#dcc5b0]">
          <article className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-[#6b422d]/60 mb-4">
              {article.date}
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-light text-[#6b422d] leading-snug mb-10">
              {article.title}
            </h1>

            <div className="space-y-6">
              {article.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#6b422d]/80 text-base md:text-lg leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Navigation between articles */}
            <nav className="mt-20 pt-10 border-t border-[#6b422d]/20 flex justify-between items-start gap-8">
              {prevArticle ? (
                <Link
                  to={`/journal/${prevArticle.slug}`}
                  className="group flex-1"
                >
                  <p className="text-xs tracking-widest uppercase text-[#6b422d]/50 mb-2">
                    Previous
                  </p>
                  <p className="text-lg font-heading font-light text-[#6b422d] group-hover:opacity-70 transition-opacity leading-snug">
                    {prevArticle.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextArticle ? (
                <Link
                  to={`/journal/${nextArticle.slug}`}
                  className="group flex-1 text-right"
                >
                  <p className="text-xs tracking-widest uppercase text-[#6b422d]/50 mb-2">
                    Next
                  </p>
                  <p className="text-lg font-heading font-light text-[#6b422d] group-hover:opacity-70 transition-opacity leading-snug">
                    {nextArticle.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </nav>

            {/* Back to Journal */}
            <div className="mt-12 text-center">
              <Link
                to="/journal"
                className="inline-block border border-[#6b422d] text-[#6b422d] px-8 py-3 tracking-widest text-sm hover:bg-[#6b422d] hover:text-[#e3cdb9] transition-colors duration-300 uppercase"
              >
                Back to Journal
              </Link>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
