import Menu from '../Menu';
import Hero from '../Hero';
import About from '../About';
import Clients from '../Clients';
import Parceiros from '../Partners'
import Footer from '../Footer';
import Services from '../Services';
import Contact from '../Contact';

const Layout = () => {
  return (
    <>
      <Menu />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="clients">
        <Clients />
      </div>

      <div id="parceiros">
        <Parceiros />
      </div>

      <div id="contact">
        <Contact />
      </div>


      <Footer />
    </>
  );
};

export default Layout;