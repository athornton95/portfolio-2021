import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewport, forwardedRef, setTopOfViewPort, title} = props;
  inViewport ? setTopOfViewPort(title) : null;
  return (
    <div className='flex sm:items-center' id='experience' ref={forwardedRef}>
      <div>
        <span className='text-textPrimary text-xl font-title'>02.</span><p className='text-textSecondary text-3xl font-display font-semibold pl-2 inline section-header relative w-full'>Where I've Worked</p>
      </div>
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
