export const Investors = () => {
  return (
    <section id="investors" className="py-20 md:py-32 bg-white text-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-2">For Investors</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-zinc-900">
              Partnership & <br /> Growth
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              We invite institutional and private investors to join us in building a legacy of value. Our approach is transparent, disciplined, and focused on maximizing risk-adjusted returns.
            </p>
            
            <div className="space-y-6 mt-8">
                <div className="border-l-4 border-amber-500 pl-6">
                    <h4 className="text-xl font-bold mb-2 text-zinc-900">Investment Philosophy</h4>
                    <p className="text-zinc-600">
                        We prioritize assets with strong fundamentals, clear scalability, and defensible market positions. We believe in active management and strategic value addition.
                    </p>
                </div>
                 <div className="border-l-4 border-zinc-900 pl-6">
                    <h4 className="text-xl font-bold mb-2 text-zinc-900">Strategic Alignment</h4>
                    <p className="text-zinc-600">
                        We align our interests with those of our partners, ensuring that every decision contributes to mutual long-term success.
                    </p>
                </div>
            </div>
          </div>

          <div className="bg-zinc-50 p-8 md:p-12 border border-zinc-200">
            <h4 className="text-2xl font-serif font-bold mb-6 text-zinc-900">Investor Inquiries</h4>
            <p className="text-zinc-500 mb-8">
                To discuss investment opportunities or request our investor presentation, please contact our relations team.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Name</label>
                    <input type="text" id="name" className="w-full bg-white border border-zinc-300 p-4 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Full Name" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Email</label>
                    <input type="email" id="email" className="w-full bg-white border border-zinc-300 p-4 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors" placeholder="email@company.com" />
                </div>
                <div>
                    <label htmlFor="interest" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Area of Interest</label>
                    <select id="interest" className="w-full bg-white border border-zinc-300 p-4 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors">
                        <option>General Investment</option>
                        <option>Cosmetics (MON-EGO)</option>
                        <option>Energy & Oil</option>
                        <option>Partnership</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-zinc-900 text-white font-bold uppercase tracking-widest py-4 hover:bg-zinc-800 transition-colors">
                    Contact Relations
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
