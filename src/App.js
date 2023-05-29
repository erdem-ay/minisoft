import Cta from './components/Cta';
import Documentation from './components/Documentation';
import Features from './components/Features';
import Footer from './components/Footer';
import FooterBanner from './components/FooterBanner';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SupportByPeople from './components/SupportByPeople';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Documentation />
      <Testimonials />
      <SupportByPeople />
      <Cta/>
      <Footer/>
      <FooterBanner />
    </div>
  );
}

export default App;
