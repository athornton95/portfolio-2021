import { useState } from 'react';
import { About, Contact, Container, Experience, Navigation, Work } from '../../components';

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
      <div className='h-screen'>
        this is the intro page
      </div>
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
