import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewport, forwardedRef, setTopOfViewPort, title} = props;
  inViewport ? setTopOfViewPort(title) : setTopOfViewPort('home') ;
  return (
    <div className="viewport-block" id='about' style={{ minHeight: '100vh' }} ref={forwardedRef}>
      <h1>About</h1>
    </div>
  );
};

let options = {
  rootMargin: '0px',
  threshold: .6
}

const ViewportBlock = handleViewport(Block, options);

const About = (props) => {
  const { setIsInViewPort, setTopOfViewPort } = props;
  return (
    <ViewportBlock
      onEnterViewport={() => setIsInViewPort(true)}
      onLeaveViewport={() => setIsInViewPort(false)}
      setTopOfViewPort={setTopOfViewPort}
      title='About'
    />
  );
};

export default About;
