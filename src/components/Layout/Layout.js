import React, { useState } from 'react';
import { About, Contact, Container, Experience, Footer, Hero, Navigation, Work } from '..';

const Layout = () => {
  const [isInViewPort, setIsInViewPort] = useState(false);
  const [topOfViewPort, setTopOfViewPort] = useState('');

  return (
    <>
    <Navigation 
      isInViewPort={isInViewPort}
      topOfViewPort={topOfViewPort}
    />
    <Container>
      <Hero />
      <About 
        setIsInViewPort={setIsInViewPort}
        setTopOfViewPort={setTopOfViewPort}
      />
      <Experience
        setIsInViewPort={setIsInViewPort}
        setTopOfViewPort={setTopOfViewPort}
      />
      <Work
        setIsInViewPort={setIsInViewPort}
        setTopOfViewPort={setTopOfViewPort}
      />
      <Contact
        setIsInViewPort={setIsInViewPort}
        setTopOfViewPort={setTopOfViewPort}
      />
    </Container>
    <Footer />
    </>
  );
};

export default Layout;
