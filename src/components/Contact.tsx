import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">Get in Touch</h2>
        <h3 className="text-3xl md:text-5xl font-serif font-bold mb-12">Global Headquarters</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-8 border border-white/5 hover:bg-white/5 transition-colors">
            <Mail className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Email</h4>
            <a href="mailto:contact@gregor.international" className="text-gray-400 hover:text-white transition-colors">
              contact@gregor.international
            </a>
          </div>

          <div className="flex flex-col items-center p-8 border border-white/5 hover:bg-white/5 transition-colors">
            <MapPin className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Location</h4>
            <p className="text-gray-400">
              International Operations<br />
              London • Dubai • Bucharest
            </p>
          </div>

          <div className="flex flex-col items-center p-8 border border-white/5 hover:bg-white/5 transition-colors">
            <Phone className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Inquiries</h4>
            <p className="text-gray-400">
              For corporate inquiries, please<br />
              use our official channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
