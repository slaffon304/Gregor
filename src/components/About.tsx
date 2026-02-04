import { Shield, TrendingUp, Eye, Layers } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      title: "Reliability",
      description: "We build trust through consistent performance and unyielding integrity."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
      title: "Growth",
      description: "Focused on scalable assets with high marginality and long-term potential."
    },
    {
      icon: <Eye className="w-8 h-8 text-amber-500" />,
      title: "Transparency",
      description: "Open communication with partners and investors is the bedrock of our success."
    },
    {
      icon: <Layers className="w-8 h-8 text-amber-500" />,
      title: "Strategy",
      description: "Diversified portfolio management ensuring stability across market cycles."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((val, index) => (
              <div key={index} className="bg-white/5 p-8 border border-white/10 hover:border-amber-500/50 transition-colors group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                <p className="text-sm text-gray-400">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
