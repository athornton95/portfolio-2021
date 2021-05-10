import React from 'react';
import handleViewport from 'react-in-viewport';
import { Card } from '..';

const Block = (props) => {
  const { inViewport, forwardedRef, setTopOfViewPort, title} = props;
  inViewport ? setTopOfViewPort(title) : null;
  return (
  <div className='flex sm:items-center pt-24' id='work' ref={forwardedRef}>
    <div className='w-full'>
      <div className='pb-8 flex'>
        <div>
          <span className='text-textPrimary text-xl font-title self-end'>03.</span><p className='section-header font-display self-end'>Some Things I've Built</p>
        </div>
      <span className='inline-block self-center bg-textTertiary h-px md:w-32 ml-4'/>
      </div>
      <div className='grid lg:grid-cols-2 gap-4 sm:pl-11'>
        <Card
          title="Barna Access Plus"
          description="Content platform built on Gloo's core authentification services. Currently utilized for Barna, but built to accomodate expansion and scaling to incorporate other content partners in the near future."
          company="Gloo (private repository)"
          tech={['Next.js', 'React', 'ApolloGQL', 'Prismic.io', 'MaterialUI']}
          website='https://barna.gloo.us/'
        />
        <Card 
          title="Program Explorer POC"
          description="Research effort to validate a hypothesis that if explorers are presented with an array curated of programs from outside vendors that they will be more likely to sign up for one."
          company="Gloo (private repository)"
          tech={['React', 'Gatsby', 'Prismic.io', 'MaterialUI']}
          website='https://programs.gloo.us/churches-care/best-night-in'
        />
        <Card
          title="Ecommerce/Buyflow"
          description="Ecommerce flow that steamlines the purchase process of Gloo's applications."
          company="Gloo (private repository)"
          tech={['Next.js', 'React', 'Redux', 'ApolloGQL', 'Nextmail', 'MaterialUI']}
        />
        <Card
          title="Natural Habitat Adventures"
          description="Company marketing website that features detailed descriptions of Nat Hab's 100+ adventure trips."
          company="Natural Habitat Adventures (private repository)"
          tech={['JQuery', 'VanillaJS', 'Sass', 'HTML', 'CMS']}
          website='https://www.nathab.com/'
        />
        <Card
          title="Hike On"
          description="Single page application that consumes user location data, plugs it into Google Maps API and REI's Hiking Project API and returns a list of trails near them.  Also includes optional difficulty and length paramaters as well as weather data at the trailhead."
          tech={['React', 'Node.js', 'MongoDB']}
          github='https://github.com/athornton95/hikingApp'
          website='https://hike-on.herokuapp.com/'
        />
        <Card
          title="Mario Maze"
          description="Javascript game inspired by an intersection old school Mario games and Pacman. Run around, collect coins, avoid ghosts and see if you can save Princess Peach from Bowser's lair!"
          tech={['VanillaJS', 'jQuery', 'HTML']}
          github='https://github.com/athornton95/mario_pacman'
          website='https://athornton95.github.io/mario_pacman/'
        />
        <Card
          title="Porfolio v1"
          description="My first attempt at a portfolio site, whipped together during the last week of my bootcamp at General Assembly circa June 2019."
          tech={['Sass', 'jQuery', 'HTML']}
          github='https://github.com/athornton95/portfolio_site'
          website='https://alexthornton.dev/'
        />
      </div>
    </div>
  </div>
  );
};

let options = {
  rootMargin: '0px',
  threshold: .7
}

const ViewportBlock = handleViewport(Block, options);

const Work = (props) => {
  const { setTopOfViewPort, setIsInViewPort } = props;
  return (
    <ViewportBlock
      onEnterViewport={() => setIsInViewPort(true)}
      onLeaveViewport={() => setIsInViewPort(false)}
      setTopOfViewPort={setTopOfViewPort}
      title='Work'
    />
  );
};

export default Work;
