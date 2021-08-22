import React, { useState } from 'react';
import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const navItems = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  const [navSelected, setNavSelected] = useState(0);

  function Page({ navSelected }) {
    switch (navSelected) {
      case 0:
        return <About />;
      case 1:
        return <Portfolio />;
      case 2:
        return <Contact />;
      case 3:
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <>
      <Nav
        navItems={navItems}
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      />
      <main>
        <Page navSelected={navSelected} />
      </main>
      <Footer />
    </>
  );
}

export default App;
