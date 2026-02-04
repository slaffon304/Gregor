import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  Globe, 
  TrendingUp, 
  Shield, 
  Target, 
  Users, 
  Mail, 
  ArrowRight,
  Sparkles,
  Fuel,
  Building2,
  CheckCircle,
  Send,
  Menu,
  X
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', investorType: '' });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="font-['Playfair_Display',serif] font-bold text-black text-lg">G</span>
            </div>
            <span className="font-['Playfair_Display',serif] text-xl font-semibold tracking-wide">GREGOR</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Businesses', 'Investors', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('investors')}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium text-sm rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
            >
              For Investors
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#0a0a0f] border-t border-white/5 px-6 py-4"
          >
            {['About', 'Businesses', 'Investors', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzMzMyIgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz48L2c+PC9zdmc+')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-8">
              <Globe size={14} className="text-amber-500" />
              International Holding Company
            </div>
            
            <h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6">
              <span className="text-white">GREGOR</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">INTERNAȚIONAL</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Building Value Across Industries
            </p>
            
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12">
              International holding company focused on strategic assets, long-term growth and global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('investors')}
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                For Investors
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('businesses')}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Our Businesses
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="animate-bounce text-gray-600" size={32} />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2', label: 'Business Divisions' },
              { value: '10+', label: 'Countries' },
              { value: '100M+', label: 'Market Potential' },
              { value: '2024', label: 'Founded' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-semibold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm text-amber-500 mb-6">
                <Building2 size={14} />
                About the Holding
              </div>
              <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-semibold mb-6">
                Strategic Vision.<br />
                <span className="text-gray-500">Global Ambition.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                GREGOR INTERNAȚIONAL is an international holding company uniting strategic business directions with a focus on growth, scalability, and investment attractiveness.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We build and manage a diversified portfolio of high-margin businesses operating in sustainable industries with strong long-term potential.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: 'Reliability', desc: 'Proven track record and stable operations' },
                { icon: TrendingUp, title: 'Growth', desc: 'Focus on scalable, high-margin businesses' },
                { icon: Target, title: 'Strategy', desc: 'Long-term vision with clear milestones' },
                { icon: Globe, title: 'Transparency', desc: 'Open communication with stakeholders' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                  <item.icon className="text-amber-500 mb-4" size={28} />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="mt-24 grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-3xl"
            >
              <h3 className="font-['Playfair_Display',serif] text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To create sustainable value by investing in and developing businesses that shape the future of their industries. We combine strategic capital allocation with operational excellence to build lasting enterprises.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl"
            >
              <h3 className="font-['Playfair_Display',serif] text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become a leading international holding company recognized for its strategic portfolio, operational excellence, and commitment to creating value for all stakeholders across global markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Units Section */}
      <section id="businesses" className="py-24 md:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-6">
              Our Portfolio
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-semibold mb-4">
              Business Structure
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Diversified portfolio across high-growth and stable industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MON-EGO Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-rose-500/5 via-purple-500/5 to-transparent"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[100px] group-hover:bg-rose-500/20 transition-colors duration-500" />
              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Sparkles className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display',serif] text-2xl font-semibold">MON-EGO</h3>
                    <p className="text-rose-400 text-sm">Premium Cosmetics</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Our proprietary cosmetics brand focused on quality, aesthetics, and international markets. A high-margin product with exceptional scaling potential through e-commerce and distribution networks.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {['Own cosmetic brand', 'Premium quality focus', 'E-commerce & distribution scaling', 'International market expansion'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                      <CheckCircle size={16} className="text-rose-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://mon-ego.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group/btn"
                >
                  Visit Website
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Energy & Oil Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-transparent"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-colors duration-500" />
              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Fuel className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display',serif] text-2xl font-semibold">Energy & Oil</h3>
                    <p className="text-amber-400 text-sm">Strategic Energy Division</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Strategic business in the energy and oil sector with high capitalization. Long-term contracts and sustainable demand make this division attractive to institutional and private investors.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {['High capitalization business', 'Long-term contracts', 'Sustainable market demand', 'Institutional investor ready'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                      <CheckCircle size={16} className="text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://gregor.international" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group/btn"
                >
                  Visit Website
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm text-amber-500 mb-6">
              <TrendingUp size={14} />
              Investment Thesis
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-semibold mb-4">
              Why Invest With Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Strategic advantages that make GREGOR INTERNAȚIONAL an attractive investment opportunity
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Shield, 
                title: 'Diversified Portfolio', 
                desc: 'Strategic mix of high-margin cosmetics and stable energy sector investments reduces risk while maximizing growth potential.'
              },
              { 
                icon: TrendingUp, 
                title: 'High-Growth Industries', 
                desc: 'Operating in sustainable, high-margin industries with proven demand and significant scaling opportunities.'
              },
              { 
                icon: Globe, 
                title: 'International Approach', 
                desc: 'Global market presence with operations and partnerships across multiple countries and regions.'
              },
              { 
                icon: Users, 
                title: 'Professional Management', 
                desc: 'Experienced leadership team with deep industry expertise and proven track record of value creation.'
              },
              { 
                icon: Target, 
                title: 'Long-term Strategy', 
                desc: 'Focus on sustainable growth with clear milestones and disciplined capital allocation.'
              },
              { 
                icon: CheckCircle, 
                title: 'Transparent Operations', 
                desc: 'Commitment to open communication and regular reporting to all stakeholders and partners.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-amber-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-amber-500" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-6">
                Leadership
              </div>
              <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-semibold mb-2">
                KUNST GRIGORE
              </h2>
              <p className="text-amber-500 mb-6">Founder & Owner</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                A strategic entrepreneur with a clear vision for building capital and scalable businesses. Under his leadership, GREGOR INTERNAȚIONAL has grown into a diversified international holding with operations in premium cosmetics and energy sectors.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Focused on long-term value creation, strategic partnerships, and building sustainable enterprises that deliver consistent returns for stakeholders.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
                <div className="relative w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                      <span className="font-['Playfair_Display',serif] text-4xl font-bold text-black">KG</span>
                    </div>
                    <p className="text-gray-400 text-sm">Strategic Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm text-amber-500 mb-6">
                <TrendingUp size={14} />
                For Investors
              </div>
              <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-semibold mb-6">
                Investment Philosophy
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We believe in creating lasting value through strategic investments in businesses with strong fundamentals and significant growth potential. Our approach combines disciplined capital allocation with active operational involvement.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <h3 className="font-semibold mb-2">Partnership Approach</h3>
                  <p className="text-gray-500 text-sm">
                    We seek partners who share our long-term vision and commitment to building sustainable enterprises. Whether you're an institutional investor or a private individual, we welcome discussions about collaboration opportunities.
                  </p>
                </div>
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <h3 className="font-semibold mb-2">Transparency & Communication</h3>
                  <p className="text-gray-500 text-sm">
                    Regular updates, clear reporting, and open dialogue form the foundation of our investor relationships. We believe in building trust through consistent communication.
                  </p>
                </div>
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <h3 className="font-semibold mb-2">Value Creation Focus</h3>
                  <p className="text-gray-500 text-sm">
                    Every investment decision is guided by our commitment to creating real, sustainable value for all stakeholders.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-3xl">
                <h3 className="font-['Playfair_Display',serif] text-2xl font-semibold mb-2">Investor Inquiry</h3>
                <p className="text-gray-500 mb-8">Connect with our investment team</p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                    <input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Investor Type</label>
                    <select 
                      value={formData.investorType}
                      onChange={(e) => setFormData({...formData, investorType: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors"
                    >
                      <option value="" className="bg-gray-900">Select type</option>
                      <option value="institutional" className="bg-gray-900">Institutional Investor</option>
                      <option value="private" className="bg-gray-900">Private Investor</option>
                      <option value="family-office" className="bg-gray-900">Family Office</option>
                      <option value="strategic" className="bg-gray-900">Strategic Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                    <textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors resize-none"
                      placeholder="Tell us about your investment interests..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-6">
              <Mail size={14} />
              Get in Touch
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We operate internationally and welcome inquiries from potential partners, investors, and stakeholders worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/[0.02] border border-white/5 rounded-2xl"
            >
              <div className="w-14 h-14 mx-auto bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="text-amber-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@gregor.international" className="text-gray-400 hover:text-amber-500 transition-colors">
                info@gregor.international
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-white/[0.02] border border-white/5 rounded-2xl"
            >
              <div className="w-14 h-14 mx-auto bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="text-amber-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Global Operations</h3>
              <p className="text-gray-400">Europe, Asia, Americas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-white/[0.02] border border-white/5 rounded-2xl"
            >
              <div className="w-14 h-14 mx-auto bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="text-amber-500" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Headquarters</h3>
              <p className="text-gray-400">Moldova, EU</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="font-['Playfair_Display',serif] font-bold text-black text-lg">G</span>
              </div>
              <div>
                <span className="font-['Playfair_Display',serif] text-lg font-semibold">GREGOR INTERNAȚIONAL</span>
                <p className="text-xs text-gray-500">International Holding Company</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <a href="https://mon-ego.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MON-EGO</a>
              <a href="https://gregor.international" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Energy & Oil</a>
            </div>

            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} GREGOR INTERNAȚIONAL. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
