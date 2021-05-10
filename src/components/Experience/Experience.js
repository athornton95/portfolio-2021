import React from 'react';
import handleViewport from 'react-in-viewport';
import { ChevronRightIcon } from '@heroicons/react/solid';

const Block = (props) => {
  const { inViewport, forwardedRef, setTopOfViewPort, title} = props;
  inViewport ? setTopOfViewPort(title) : null;

  return (
    <div className='flex sm:items-center pt-24' id='experience' ref={forwardedRef}>
      <div className='w-full'>
        <div className='pb-8 flex'>
          <div>
            <span className='text-textPrimary text-xl font-title self-end'>02.</span><p className='section-header font-display self-end'>Where I've Worked</p>
          </div>
        <span className='inline-block self-center bg-textTertiary h-px md:w-32 ml-4'/>
        </div>
        <div className='sm:pl-11'>
          <div className='mb-6 max-w-screen-md'>
            <p className='text-xl text-textPrimary font-semibold font-title inline'>Gloo</p><span className='pl-3 text-textTertiary'>|</span><span className='pl-3 text-textTertiary'>Boulder, CO</span>
            <div className='mt-2 ml-5 pl-6 border-l-4 border-textTertiary border-dotted'>
              <p className='text-lg text-textSecondary font-semibold font-display'>Web Engineer</p>
              <p className='text-textTertiary font-title text-sm pb-2'>March 2021 - Present</p>
              <ul className='pl-4 pb-4 font-title text-textTertiary text-sm'>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  <span className='text-textPrimary pr-2'>Project:</span>Program Explorer — research effort utilizing Gatsby.js & Prismic.
                  Worked tightly with UX Research & Design to iterate quickly on functional prototype from initial design to live application with ads pointed at it.
                </li></div>
              </ul>
              <p className='text-lg text-textSecondary font-semibold font-display'>Associate Web Engineer</p>
              <p className='text-textTertiary font-title text-sm pb-2'>May 2020 - March 2021</p>
              <ul className='pl-4 pb-1 font-title text-textTertiary text-sm'>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  <span className='text-textPrimary pr-2'>Project:</span>Barna Access Plus — utilizing React, Next.js, and ApolloGQL,
                  BAP lays the groundwork for a content platform build on Gloo's core authentication services.
                  The site showcases a bright and snappy UI that delights its users. Built on a Prismic data source (headless CMS),
                  the architecture of Prismic 'slices' is comprehensive, scalable, and easy to navigate for even the least-tech savy content managers.
                </li></div>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  <span className='text-textPrimary pr-2'>Project:</span>Ecommerce Buyflow / Registration — nicknamed 'dreamflow',
                  Gloo's new ecommerce flow binds together the registration process for their myriad of products under one,
                  dynamically branded umbrella. Technologies utilized: Next.js, React, Redux, and ApolloGQL
                </li></div>
              </ul>
            </div>
          </div>
          <div className='mb-6 max-w-screen-md'>
            <p className='text-xl text-textPrimary font-semibold font-title inline'>Natural Habitat Adventures</p><span className='pl-3 text-textTertiary'>|</span><span className='pl-3 text-textTertiary'>Boulder, CO</span>
            <div className='mt-2 ml-5 pl-6 border-l-4 border-textTertiary border-dotted'>
              <p className='text-lg text-textSecondary font-semibold font-display'>Jr Frontend Web Developer</p>
              <p className='text-textTertiary font-title text-sm pb-2'>July 2019 - May 2020</p>
              <ul className='pl-4 pb-1 font-title text-textTertiary text-sm'>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  Design and develop new UI features for both end user and content creators within CMS
                </li></div>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  Spearheaded API integration to allow for dynamic, real-time data loading
                </li></div>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  Collaborate with product team to improve internal features to increase efficiency
                </li></div>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  Develop end-to-end integration tests using Cypress.io
                </li></div>
              </ul>
            </div>
          </div>
          <div className='mb-6 max-w-screen-md'>
            <p className='text-xl text-textPrimary font-semibold font-title inline'>AMB3R Creative</p><span className='pl-3 text-textTertiary'>|</span><span className='pl-3 text-textTertiary'>Boulder, CO</span>
            <div className='mt-2 ml-5 pl-6 border-l-4 border-textTertiary border-dotted'>
              <p className='text-lg text-textSecondary font-semibold font-display'>Graphic Designer</p>
              <p className='text-textTertiary font-title text-sm pb-2'>June 2018 - February 2019</p>
              <ul className='pl-4 pb-1 font-title text-textTertiary text-sm'>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  Designed custom apparel for 40+ clients
                </li></div>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  Created pixel perfect separations to take designs from digital to screen print
                </li></div>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  Itterated with clients and project managers to ensure customer delight
                </li></div>
                <div className='pb-1'><ChevronRightIcon className='inline h-4 w-4 text-textPrimary'/><li className='inline pl-2'>
                  Developed 86 page look-book and style guide for both internal use and external marketing
                </li></div>
              </ul>
            </div>
          </div>
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
