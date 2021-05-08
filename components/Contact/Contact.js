import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewport, forwardedRef, setTopOfViewPort, title} = props;
  inViewport ? setTopOfViewPort(title) : null;
  return (
    <div className="viewport-block h-full" id='contact' style={{ minHeight: '100vh' }} ref={forwardedRef}>
      <h1>Contact</h1>
    </div>
  );
};

let options = {
  rootMargin: '0px',
  threshold: .6
}

const ViewportBlock = handleViewport(Block, options);

const Contact = (props) => {
  const { setIsInViewPort, setTopOfViewPort } = props;
  return (
    <ViewportBlock
      onEnterViewport={() => setIsInViewPort(true)}
      onLeaveViewport={() => setIsInViewPort(false)}
      setTopOfViewPort={setTopOfViewPort}
      title='Contact'
    />
  );
};

export default Contact;
