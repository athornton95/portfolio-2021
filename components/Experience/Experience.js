import handleViewport from 'react-in-viewport';

const Block = (props) => {
  console.log(props);
  const { inViewport, forwardedRef } = props;
  // const color = inViewport ? '#217ac0' : '#ff9800';
  // const text = inViewport ? 'In viewport' : 'Not in viewport';
  return (
    <div className="viewport-block h-full" ref={forwardedRef}>
      <h1>Experience</h1>
    </div>
  );
};

const ViewportBlock = handleViewport(Block);

const Experience = (props) => {
  return (
    <ViewportBlock
      onEnterViewport={() => console.log('enter')}
      onLeaveViewport={() => console.log('leave')} 
      title='experience'
    />
  );
};

export default Experience;
