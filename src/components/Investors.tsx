import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Investors = () => {
  // --- ТВОЯ НОВАЯ ССЫЛКА ---
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9LpKmC3i37sebv86vDI0WjYNuT1FyOjArL56UH2ChQjNSPW3Nh4gK4NFOiuaZwVpk/exec";
  // -----------------------

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('General Investment');
  const [message, setMessage] = useState('');
  
  const [countryCode, setCountryCode] = useState('+373');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+')) {
        val = '+' + val.replace(/[^0-9]/g, '');
    }
    if (val.length <= 5) setCountryCode(val);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^\d+$/.test(val)) {
      setPhoneNumber(val);
      setIsPhoneValid(val.length >= 6 && val.length <= 15);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || !isPhoneValid || countryCode.length < 2 || !name || !email) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    const fullPhone = `${countryCode} ${phoneNumber}`;

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Phone", fullPhone);
    formData.append("Interest", interest);
    formData.append("Message", message);
    // Добавляем дату отправки
    formData.append("Date", new Date().toLocaleString());

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: 'no-cors'
      });

      // 1. Сначала ОЧИЩАЕМ ПОЛЯ
      setName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
      setInterest('General Investment');
      
      // 2. Показываем сообщение с небольшой задержкой, чтобы React успел обновить экран
      setTimeout(() => {
          alert("Request sent successfully! We will contact you soon.");
      }, 100);

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="investors" className="py-20 md:py-32 bg-white text-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Левая колонка */}
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

          {/* Правая колонка (Форма) */}
          <div className="bg-zinc-50 p-8 md:p-12 border border-zinc-200 shadow-lg">
            <h4 className="text-2xl font-serif font-bold mb-6 text-zinc-900">Investor Inquiries</h4>
            <p className="text-zinc-500 mb-8">
                To discuss investment opportunities or request our investor presentation, please contact our relations team.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
                
                {/* Имя */}
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                      className="w-full bg-white border border-zinc-300 p-4 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors" 
                      placeholder="Full Name" 
                    />
                </div>

                {/* Телефон */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Phone number</label>
                    <div className="flex">
                        <input 
                            type="text"
                            value={countryCode}
                            onChange={handleCodeChange}
                            className="bg-zinc-200 border border-zinc-300 border-r-0 p-4 text-zinc-900 font-bold focus:outline-none focus:border-amber-500 w-[80px] text-center"
                            placeholder="+XX"
                        />
                        <input 
                            type="tel" 
                            id="phone" 
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            required
                            className={`w-full bg-white border p-4 text-zinc-900 focus:outline-none transition-colors ${!isPhoneValid && phoneNumber.length > 0 ? 'border-red-500 focus:border-red-500 bg-red-50' : 'border-zinc-300 focus:border-amber-500'}`} 
                            placeholder="79000000" 
                        />
                    </div>
                    {!isPhoneValid && phoneNumber.length > 0 && (
                        <p className="text-red-500 text-xs mt-1">Please enter a valid phone number (digits only).</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      className="w-full bg-white border border-zinc-300 p-4 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors" 
                      placeholder="email@company.com" 
                    />
                </div>

                {/* Интерес */}
                <div>
                    <label htmlFor="interest" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Area of Interest</label>
                    <div className="relative">
                        <select 
                            id="interest" 
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            className="w-full bg-white border border-zinc-300 p-4 pr-10 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors cursor-pointer appearance-none"
                        >
                            <option>General Investment</option>
                            <option>Cosmetics (MON-EGO)</option>
                            <option>Energy & Oil</option>
                            <option>Partnership</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5 pointer-events-none" />
                    </div>
                </div>

                {/* Сообщение */}
                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Message</label>
                    <textarea 
                        id="message" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4} 
                        className="w-full bg-white border border-zinc-300 p-4 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors resize-none" 
                        placeholder="Please describe your inquiry..."
                    ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-zinc-900 text-white font-bold uppercase tracking-widest py-4 hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Sending..." : "Contact Relations"}
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
