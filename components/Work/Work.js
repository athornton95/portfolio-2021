import handleViewport from 'react-in-viewport';

const Block = (props) => {
  console.log(props);
  const { inViewport, forwardedRef } = props;
  // const color = inViewport ? '#217ac0' : '#ff9800';
  // const text = inViewport ? 'In viewport' : 'Not in viewport';
  return (
    <div className="viewport-block h-full" ref={forwardedRef}>
      <h1>Work</h1>
    </div>
  );
};

const ViewportBlock = handleViewport(Block);

const Work = (props) => {
  return (
    <ViewportBlock
      onEnterViewport={() => console.log('enter')}
      onLeaveViewport={() => console.log('leave')} 
      title='work'
    />
  );
};

export default Work;
