import { useState } from 'react';

export const Investors = () => {
  const [countryCode, setCountryCode] = useState('+373');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  // Список кодов стран (можно расширить)
  const countryCodes = [
    { code: '+373', label: 'MD' },
    { code: '+40', label: 'RO' },
    { code: '+44', label: 'UK' },
    { code: '+971', label: 'UAE' },
    { code: '+1', label: 'US' },
    { code: '+49', label: 'DE' },
    { code: '+33', label: 'FR' },
    { code: '+7', label: 'RU' },
  ];

  // Проверка номера при вводе (разрешаем только цифры, макс 15 знаков)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Если ввод пустой или содержит только цифры
    if (val === '' || /^\d+$/.test(val)) {
      setPhoneNumber(val);
      // Простая валидация: длина от 8 до 15 цифр
      setIsPhoneValid(val.length >= 8 && val.length <= 15);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || !isPhoneValid) {
      setIsPhoneValid(false);
      alert("Please enter a valid phone number.");
      return;
    }
    // Здесь будет логика отправки
    console.log("Form submitted");
    alert("Request sent successfully!");
  };

  return (
    <section id="investors" className="py-20 md:py-32 bg-white text-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Левая колонка (Текст) */}
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
                    <input type="text" id="name" required className="w-full bg-white border border-zinc-300 p-4 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Full Name" />
                </div>

                {/* Телефон (Сложное поле) */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Phone number</label>
                    <div className="flex">
                        {/* Выбор кода страны */}
                        <select 
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="bg-zinc-100 border border-zinc-300 border-r-0 p-4 text-zinc-900 font-bold focus:outline-none focus:border-amber-500 w-[110px] appearance-none cursor-pointer"
                        >
                            {countryCodes.map((c) => (
                                <option key={c.code} value={c.code}>{c.code} ({c.label})</option>
                            ))}
                        </select>
                        
                        {/* Поле ввода номера */}
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
                    {/* Сообщение об ошибке */}
                    {!isPhoneValid && phoneNumber.length > 0 && (
                        <p className="text-red-500 text-xs mt-1">Please enter a valid phone number (digits only).</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Email</label>
                    <input type="email" id="email" required className="w-full bg-white border border-zinc-300 p-4 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors" placeholder="email@company.com" />
                </div>

                {/* Выбор интереса */}
                <div>
                    <label htmlFor="interest" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Area of Interest</label>
                    <select id="interest" className="w-full bg-white border border-zinc-300 p-4 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors cursor-pointer appearance-none">
                        <option>General Investment</option>
                        <option>Cosmetics (MON-EGO)</option>
                        <option>Energy & Oil</option>
                        <option>Partnership</option>
                    </select>
                </div>

                {/* Сообщение (Новое поле) */}
                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-zinc-700 uppercase tracking-wide mb-2">Message</label>
                    <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full bg-white border border-zinc-300 p-4 text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors resize-none" 
                        placeholder="Please describe your inquiry..."
                    ></textarea>
                </div>

                {/* Кнопка */}
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
