import handleViewport from 'react-in-viewport';

const Block = (props) => {
  console.log(props);
  const { inViewport, forwardedRef } = props;
  //inViewport is a bool
  return (
    <div className="viewport-block" ref={forwardedRef}>
      <h1>About</h1>
    </div>
  );
};

const ViewportBlock = handleViewport(Block);

const About = (props) => {
  return (
    <ViewportBlock
      onEnterViewport={() => console.log('enter')}
      onLeaveViewport={() => console.log('leave')}
      title='about'
    />
  );
};

export default About;
