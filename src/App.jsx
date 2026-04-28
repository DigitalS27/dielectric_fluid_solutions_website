import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ThisIsUs from './components/ThisIsUs';
import Services from './components/Services';
import Equipment from './components/Equipment';
import Accreditation from './components/Accreditation';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ThisIsUs />
        <Services />
        <Equipment />
        <Accreditation />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
