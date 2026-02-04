import React from 'react';

export const About = () => {
  const values = [
    {
      image: "/images/about-1.jpg", // Убедись, что файл есть в папке public/images
      title: "Reliability",
      description: "We build trust through consistent performance and unyielding integrity."
    },
    {
      image: "/images/about-2.jpg",
      title: "Growth",
      description: "Focused on scalable assets with high marginality and long-term potential."
    },
    {
      image: "/images/about-3.jpg",
      title: "Transparency",
      description: "Open communication with partners and investors is the bedrock of our success."
    },
    {
      image: "/images/about-4.jpg",
      title: "Strategy",
      description: "Diversified portfolio management ensuring stability across market cycles."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Левая часть: Текст */}
          <div>
            <h2 className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              A Strategic Partner in <br /> Global Markets
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              GREGOR INTERNAȚIONAL is a premier holding company dedicated to acquiring and developing high-potential assets in strategic sectors. By bridging the gap between premium consumer goods and the foundational energy sector, we create a balanced ecosystem for sustainable wealth generation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to deliver exceptional value to our stakeholders by fostering innovation, operational excellence, and strategic market expansion.
            </p>
          </div>

          {/* Правая часть: Карточки с картинками */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, index) => (
              <div 
                key={index} 
                className="group relative h-64 overflow-hidden border border-white/10 rounded-sm"
              >
                {/* Картинка на фоне */}
                <img 
                  src={val.image} 
                  alt={val.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Затемнение (чтобы текст читался) */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Текст поверх картинки */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                  <h4 className="text-xl font-bold mb-2 text-white border-b-2 border-amber-500 inline-block w-max pb-1">
                    {val.title}
                  </h4>
                  <p className="text-sm text-gray-200 opacity-90">
                    {val.description}
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
