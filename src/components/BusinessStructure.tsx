import { ArrowRight } from 'lucide-react';

export const BusinessStructure = () => {
  return (
    <section id="businesses" className="py-20 md:py-32 bg-zinc-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">Our Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold">Strategic Divisions</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* MON-EGO */}
          <div className="group relative overflow-hidden bg-black border border-white/10 hover:border-amber-500/50 transition-all duration-500 h-[500px] flex flex-col justify-end">
             {/* Background Image */}
            <img 
              src="/images/mon-ego.jpg" 
              alt="MON-EGO Premium Cosmetics"
              className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="mb-4">
                <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">Premium Cosmetics</span>
              </div>
              <h4 className="text-3xl font-serif font-bold mb-4">MON-EGO</h4>
              <ul className="space-y-2 text-gray-300 mb-8 text-sm md:text-base">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>Proprietary Cosmetic Brand</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>High Margin Product</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>Global Market Focus</li>
              </ul>
              <a 
                href="https://mon-ego.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-amber-500 transition-colors uppercase tracking-widest font-bold text-sm"
              >
                Visit Website <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* GREGOR INTERNATIONAL – ENERGY & OIL */}
          <div className="group relative overflow-hidden bg-black border border-white/10 hover:border-amber-500/50 transition-all duration-500 h-[500px] flex flex-col justify-end">
            {/* Background Image */}
            <img 
              src="/images/oil.jpg" 
              alt="Gregor International Energy"
              className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="mb-4">
                <span className="bg-blue-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">Energy & Oil</span>
              </div>
              <h4 className="text-3xl font-serif font-bold mb-4">GREGOR INTERNATIONAL</h4>
              <ul className="space-y-2 text-gray-300 mb-8 text-sm md:text-base">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>Strategic Energy Assets</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>High Capitalization</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>Long-term Contracts</li>
              </ul>
              <a 
                href="https://gregor.international" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-amber-500 transition-colors uppercase tracking-widest font-bold text-sm"
              >
                Visit Website <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
