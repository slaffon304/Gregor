import React from 'react';

export const Owner = () => {
  return (
    <section id="owner" className="py-20 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4">Leadership</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">KUNST GRIGORE</h3>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light italic leading-relaxed">
            "True capital is built not just on assets, but on the vision to see potential where others see risk, and the discipline to turn that potential into lasting value."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Owner Image Container */}
            <div className="group relative aspect-[3/4] bg-zinc-900 overflow-hidden shadow-2xl border border-white/5 rounded-sm">
                 {/* Фото владельца */}
                 <img 
                    src="/images/grigore.jpg" 
                    alt="Kunst Grigore" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 
                 {/* Градиент снизу, чтобы надпись читалась */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                 
                 {/* Надпись внизу */}
                 <div className="absolute bottom-0 left-0 right-0 p-8">
                     <p className="text-white font-serif text-lg tracking-widest border-l-2 border-amber-500 pl-4">
                        FOUNDER & OWNER
                     </p>
                 </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
                <div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Strategic Entrepreneur</h4>
                    <p className="text-gray-400 leading-relaxed">
                        With a focus on capital creation and scalable business models, Kunst Grigore has established a holding structure that balances high-yield opportunities with foundational stability.
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Visionary Leadership</h4>
                    <p className="text-gray-400 leading-relaxed">
                        Driving the company's expansion into international markets, ensuring that every venture under the Gregor International umbrella adheres to world-class standards of quality and efficiency.
                    </p>
                </div>
                 <div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Private Equity Approach</h4>
                    <p className="text-gray-400 leading-relaxed">
                        Applying disciplined investment strategies to grow the holding's asset base, fostering a culture of long-term wealth preservation and growth.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
