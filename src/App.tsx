import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BusinessStructure } from './components/BusinessStructure';
import { WhyInvest } from './components/WhyInvest';
import { Owner } from './components/Owner';
import { Team } from './components/Team';
import { Investors } from './components/Investors';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-black min-h-screen text-slate-900 font-sans selection:bg-amber-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <BusinessStructure />
        <WhyInvest />
        <Owner />
        <Team />
        <Investors />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
