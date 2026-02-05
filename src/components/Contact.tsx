import { Mail, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">Get in Touch</h2>
        <h3 className="text-3xl md:text-5xl font-serif font-bold mb-12">Global Headquarters</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          {/* Email Block */}
          <div className="flex flex-col items-center p-8 border border-white/5 hover:bg-white/5 transition-colors group">
            <Mail className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Email</h4>
            <a 
              href="mailto:info@mon-ego.com" 
              className="text-gray-400 hover:text-amber-500 transition-colors whitespace-nowrap"
            >
              info@mon-ego.com
            </a>
          </div>

          {/* Phone Block */}
          <div className="flex flex-col items-center p-8 border border-white/5 hover:bg-white/5 transition-colors group">
            <Phone className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Phone</h4>
            <a 
              href="tel:+37368544704" 
              className="text-gray-400 hover:text-amber-500 transition-colors whitespace-nowrap"
            >
              +373 68 544 704
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
