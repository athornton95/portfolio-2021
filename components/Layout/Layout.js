import { About, Contact, Container, Experience, Navigation, Work } from '../../components';

const Layout = (props) => (
  <>
  <Navigation />
  <Container>
    <About />
    <Experience />
    <Work />
    <Contact />
  </Container>
  </>
);

export default Layout;
