import { useState } from 'react';
import { About, Contact, Container, Experience, Hero, Navigation, Work } from '../../components';

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
    </>
  );
};

export default Layout;
