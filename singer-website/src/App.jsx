// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Counter from './components/Counter';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="counter-section"> {/* Counter ko ID di */}
         <Counter />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;