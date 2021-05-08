import { Container } from '../../components'
import { Navigation } from '../../components'

const Layout = (props) => (
  <>
  <Navigation />
  <Container>
    {props.children}
  </Container>
  </>
);

export default Layout;
