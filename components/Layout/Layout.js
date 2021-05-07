import { Navigation } from '../../components'

const Layout = (props) => (
  <>
  <Navigation />
  {props.children}
  </>
);

export default Layout;
