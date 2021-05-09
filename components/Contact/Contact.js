import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewport, forwardedRef, setTopOfViewPort, title} = props;
  inViewport ? setTopOfViewPort(title) : null;
  return (
  <div className='flex sm:items-center' id='contact' ref={forwardedRef}>
    <div>
      <span className='text-textPrimary text-xl font-title'>04. What's next?</span><p className='text-textSecondary text-3xl font-display font-semibold pl-2 inline section-header relative w-full'>Get in Touch</p>
    </div>
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
