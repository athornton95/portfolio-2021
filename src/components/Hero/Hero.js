import React from 'react';

const Hero = () => (
  <div className='sm:min-h-screen flex sm:items-center mt-8 sm:mb-0 sm:-mt-20'>
    <div>
      <p className='text-textPrimary font-title pb-6'>Hi, my name is</p>
      <h1 className='text-textSecondary font-display text-4xl sm:text-7xl font-bold pb-6'>Alex Hopkins.</h1>
      <h2 className='text-textTertiary font-display text-4xl sm:text-7xl font-bold pb-6'>I build things for the web.</h2>
      <p className='text-textTertiary font-display sm:max-w-xl'>
        Welcome, I'm happy you're here! 
      </p>
      <p className='text-textTertiary font-display mb-12 sm:max-w-xl'>
        I'm a Denver based Frontend Developer with a background in design, research, and language.
        I specialize in developing (and now and again designing) delightful user experiences.
        Currently, I'm a Web Engineer at <span className='btn-inline'><a href='https://gloo.us' target='_blank' rel="noopener noreferrer">Gloo</a></span>, focused on creating human-centered products in the personal growth space.
      </p>
      <a href="mailto:ahopkins.co@gmail.com" className='text-textSecondary font-title border border-textPrimary px-6 py-4 rounded-md hover:bg-textPrimary hover:text-bgPrimary'>Get in touch</a>
    </div>
  </div>
);

export default Hero;
