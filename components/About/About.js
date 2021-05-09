import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewport, forwardedRef, setTopOfViewPort, title} = props;
  inViewport ? setTopOfViewPort(title) : setTopOfViewPort('home') ;
  return (
    <div className='flex sm:items-center' id='about' ref={forwardedRef}>
      <div>
        <span className='text-textPrimary text-xl font-title'>01.</span><p className='text-textSecondary text-3xl font-display font-semibold pl-2 inline section-header relative w-full'>About Me</p>
        {/* <h1 className='text-textSecondary font-display text-4xl sm:text-7xl font-bold pb-6'>Alex Hopkins.</h1>
        <h2 className='text-textTertiary font-display text-4xl sm:text-7xl font-bold pb-6'>I build things for the web.</h2>
        <p className='text-textTertiary font-display sm:max-w-xl'>
          Welcome, I'm happy you're here! 
        </p>
        <p className='text-textTertiary font-display mb-12 sm:max-w-xl'>
          I'm a Denver based Frontend Developer with a background in design, research, and language.
          I specialize in developing delighful user experiences.
          Currently, I'm a Web Engineer at <span className='text-textPrimary border-b border-bgPrimary hover:border-textPrimary'><a href='https://gloo.us' target='_blank' rel="noopener noreferrer">Gloo</a></span>, focused on creating human-centered products in the personal growth space.
        </p>
        <a href="mailto:ahopkins.co@gmail.com" className='text-textSecondary font-title border border-textPrimary px-6 py-4 rounded-md hover:bg-textPrimary hover:text-bgPrimary'>Get in touch</a> */}
      </div>
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
