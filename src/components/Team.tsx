import React from 'react';

export const Team = () => {
  const members = [
    {
      name: "Alexei Volkov", // Имя 1
      role: "Chief Financial Officer", // Должность
      image: "/images/team-1.jpg",
      bio: "Expert in international taxation and corporate restructuring with over 15 years of experience in European markets."
    },
    {
      name: "Elena Popescu", // Имя 2
      role: "Head of Legal", // Должность
      image: "/images/team-2.jpg",
      bio: "Specializes in mergers and acquisitions, ensuring total compliance and legal security for all holding assets."
    },
    {
      name: "David Weber", // Имя 3
      role: "Operations Director", // Должность
      image: "/images/team-3.jpg",
      bio: "Oversees the operational efficiency of the energy division, implementing scalable processes for sustainable growth."
    }
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">Our People</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold">Executive Team</h3>
        </div>

        {/* Сетка с карточками */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="group">
              
              {/* Фото с эффектом */}
              <div className="relative overflow-hidden mb-6 border-b-2 border-amber-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-[400px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Текст */}
              <div className="text-center px-4">
                <h4 className="text-2xl font-serif font-bold mb-1">{member.name}</h4>
                <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
