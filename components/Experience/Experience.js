import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewport, forwardedRef, setTopOfViewPort, title} = props;
  inViewport ? setTopOfViewPort(title) : null;
  return (
    <div className="viewport-block h-full" id='experience' style={{ minHeight: '100vh' }} ref={forwardedRef}>
      <h1>Experience</h1>
    </div>
  );
};

let options = {
  rootMargin: '0px',
  threshold: .48
}

const ViewportBlock = handleViewport(Block, options);

const Experience = (props) => {
  const { setTopOfViewPort, setIsInViewPort } = props;
  return (
    <ViewportBlock
      onEnterViewport={() => setIsInViewPort(true)}
      onLeaveViewport={() => setIsInViewPort(false)}
      setTopOfViewPort={setTopOfViewPort}
      title='Experience'
    />
  );
};

export default Experience;
