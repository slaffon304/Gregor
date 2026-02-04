import { ArrowRight } from 'lucide-react';

export const WhyInvest = () => {
  const reasons = [
    {
      image: "/images/why-1.jpg",
      title: "Global Reach",
      description: "Our operations span across borders, tapping into emerging and established markets to maximize returns."
    },
    {
      image: "/images/why-2.jpg",
      title: "Diversified Portfolio",
      description: "A balanced mix of high-growth consumer goods and stable industrial assets ensures risk mitigation."
    },
    {
      image: "/images/why-3.jpg",
      title: "Professional Management",
      description: "Led by a team of seasoned experts committed to operational excellence and strategic foresight."
    },
    {
      image: "/images/why-4.jpg",
      title: "Long-Term Vision",
      description: "We focus on sustainable value creation, building assets that stand the test of time."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-amber-500 text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Левая колонка (Текст на желтом фоне) */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h2 className="text-black/60 text-sm font-bold uppercase tracking-widest mb-2">Why Invest</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">Built for <br />Resilience</h3>
            <p className="text-black/80 text-lg leading-relaxed mb-8">
              Investment in GREGOR INTERNAȚIONAL is an investment in stability, growth, and a diversified future. We combine the agility of modern business with the solidity of traditional industries.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors w-max">
              Request Info <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Правая колонка (Сетка карточек с картинками) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden h-[280px] border border-black/10 shadow-xl"
              >
                {/* Картинка */}
                <img 
                  src={reason.image} 
                  alt={reason.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Затемнение (сильное, чтобы белый текст читался на любом фото) */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Контент карточки (Текст теперь белый) */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <h4 className="text-xl font-bold mb-3 border-l-4 border-amber-500 pl-3">
                    {reason.title}
                  </h4>
                  <p className="text-gray-200 text-sm leading-relaxed opacity-90">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
