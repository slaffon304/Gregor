import { Globe, BarChart3, Briefcase, Clock } from 'lucide-react';

export const WhyInvest = () => {
  const reasons = [
    {
      icon: <Globe className="w-12 h-12 text-zinc-800" />,
      title: "Global Reach",
      description: "Our operations span across borders, tapping into emerging and established markets to maximize returns."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-zinc-800" />,
      title: "Diversified Portfolio",
      description: "A balanced mix of high-growth consumer goods and stable industrial assets ensures risk mitigation."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-zinc-800" />,
      title: "Professional Management",
      description: "Led by a team of seasoned experts committed to operational excellence and strategic foresight."
    },
    {
      icon: <Clock className="w-12 h-12 text-zinc-800" />,
      title: "Long-Term Vision",
      description: "We focus on sustainable value creation, building assets that stand the test of time."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-amber-500 text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-black/60 text-sm font-bold uppercase tracking-widest mb-2">Why Invest</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">Built for <br />Resilience</h3>
            <p className="text-black/80 text-lg leading-relaxed mb-8">
              Investment in GREGOR INTERNAȚIONAL is an investment in stability, growth, and a diversified future. We combine the agility of modern business with the solidity of traditional industries.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
              Request Info
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white/10 p-8 border border-black/10 hover:bg-white/20 transition-colors">
                <div className="mb-6 opacity-70">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-black/70 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
