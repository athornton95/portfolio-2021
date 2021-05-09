import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewport, forwardedRef, setTopOfViewPort, title} = props;
  inViewport ? setTopOfViewPort(title) : null;
  return (
    <div className='flex sm:items-center pb-16 sm:pb-32' id='experience' ref={forwardedRef}>
      <div className='w-full'>
        <div className='pb-8 flex'>
          <div>
            <span className='text-textPrimary text-xl font-title self-end'>02.</span><p className='section-header font-display self-end'>Where I've Worked</p>
          </div>
        <span className='inline-block self-center bg-textTertiary h-px sm:w-32 ml-4'/>
        </div>
        <div>
        </div>
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
