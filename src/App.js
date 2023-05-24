import Documentation from './components/Documentation';
import Features from './components/Features';
import FooterBanner from './components/FooterBanner';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Features />
      <Documentation/>
      <Testimonials/>
      <FooterBanner/>
    </div>
  );
}

export default App;
