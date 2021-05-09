import handleViewport from 'react-in-viewport';
import Image from 'next/image';
import { ChevronRightIcon} from '@heroicons/react/solid';

const Block = (props) => {
  const { inViewport, forwardedRef, setTopOfViewPort, title} = props;
  inViewport ? setTopOfViewPort(title) : setTopOfViewPort('home') ;

  const tech = ['React', 'Next.js', 'ApolloGQL', 'TypeScript', 'JavaScript (ES6+)', 'Gatsby.js']
  return (
    <div className='flex sm:items-center' id='about' ref={forwardedRef}>
      <div className='w-full'>
        <div className='pb-8 flex'>
          <div>
            <span className='text-textPrimary text-xl font-title self-end'>01.</span><p className='section-header font-display self-end'>About Me</p>
          </div>
        <span className='inline-block self-center bg-textTertiary h-px w-32 ml-4'/>
        </div>
        <div>
          <div className='grid sm:grid-cols-3'>
            <div className='sm:col-span-2 pt-8 sm:pt-0 sm:pr-8 order-2 sm:order-1'>
              <div className='font-display text-textTertiary'>
                <p>Hi, my name is Alex Hopkins and I'm a zillenial working as a web engineer in sunny Denver, CO!</p>
                <p>A little about me: since graduating from The University of Colorado Boulder (sko Buffs) with a BA in International Affairs,
                  I have worked as a waitress at a restaurant (and loved it), had a few internships,
                  travelled quite a bit, became a graphic designer, discovered a deep love of cooking and hosting,
                  attended General Assembly's Fullstack Software Engineering bootcamp,
                  gotten my <span className='btn-inline'><a href='https://www.nathab.com/' target='_blank' rel="noopener noreferrer">first</a></span> (and <span className='btn-inline'><a href='https://gloo.us' target='_blank' rel="noopener noreferrer">second</a></span>) web engineering gigs, and learned so much along the way.
                  I mention all of this because I believe that each of my work experiences continue to contribue to my success as a developer.
                </p>
              </div>
              <p className='text-textTertiary font-display pt-4'>Here are a few technologies I've been working with recently:</p>
              <ul className='grid grid-cols-2 sm:max-w-sm'>
                {tech.map(item => (
                  <div>
                    <ChevronRightIcon className='inline h-4 w-4 text-textPrimary '/>
                    <li key={item} className='font-title text-textTertiary text-sm inline pl-2'>{item}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div className='sm:col-span-1 order-1 sm:order-2 flex'>
              <div className='relative headshot self-center'>
                <Image src="/ah-headshot.jpeg" alt="alex hopkins headshot" width={250} height={250} className='rounded-xl'/>
              </div>
            </div>
          </div>
        </div>
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
