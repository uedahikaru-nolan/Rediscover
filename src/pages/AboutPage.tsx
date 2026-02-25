import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800 bg-[#dcc5b0] min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#e3cdb9] to-[#cbae95] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none texture-paper"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-light text-[#6b422d] tracking-wide uppercase mb-6">
              About
            </h1>
          </div>
        </section>

        {/* Profile */}
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-[#dcc5b0]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-2/5 shrink-0">
              <img
                src="/images/DSC08106.jpg"
                alt="Hikaru Hatanaka"
                className="w-full aspect-[4/5] object-cover shadow-lg"
              />
            </div>

            <div className="w-full md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-heading font-light text-[#6b422d] mb-8">
                Hikaru Hatanaka
              </h2>

              <div className="space-y-6 text-[#6b422d]/80 text-base leading-relaxed font-light">
                <p>
                  Hikaru Hatanaka explores human lives, cultures, and emotions
                  through interviews, essays, art, and film. Through{' '}
                  <strong className="font-medium text-[#6b422d]">
                    Rediscover : Hidden Stories
                  </strong>
                  , real lives are documented and expressed through stories and
                  visual works.
                </p>

                <p>
                  Born with a deep curiosity for the stories behind every face,
                  Hikaru has traveled across continents — from the bustling
                  streets of Tokyo to the quiet villages of Oaxaca — seeking the
                  hidden narratives that connect us all.
                </p>

                <p>
                  Every project begins with a conversation. By listening deeply
                  and observing closely, Hikaru transforms personal stories into
                  art that resonates with universal themes of love, loss, hope,
                  and rediscovery.
                </p>

                <p>
                  When not creating, Hikaru can be found sketching in cafés,
                  experimenting with new recipes, or exploring unfamiliar
                  neighbourhoods on foot.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#6b422d]/20">
                <h3 className="text-lg font-heading font-light text-[#6b422d] tracking-wider mb-4 uppercase">
                  Contact
                </h3>
                <p className="text-[#6b422d]/80 text-base font-light leading-relaxed">
                  hello@reallygreatsite.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
