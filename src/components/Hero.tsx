export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Gradient/Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black opacity-80"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-wide">
          GREGOR <span className="text-amber-500">INTERNAȚIONAL</span>
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl font-sans font-light text-gray-300 block mt-4">
            Building Value Across Industries
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          International holding company focused on strategic assets, long-term growth and global markets.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#investors" 
            className="px-10 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-all w-full md:w-auto min-w-[200px]"
          >
            For Investors
          </a>
          <a 
            href="#businesses" 
            className="px-10 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full md:w-auto min-w-[200px]"
          >
            Our Businesses
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
