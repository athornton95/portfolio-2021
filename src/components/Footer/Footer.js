import React from 'react';
const Footer = () => (
  <footer>
    <div className='h-48 text-textTertiary text-sm font-title flex flex-col items-center justify-end pb-8 mt-16'>
      <div className='pb-8'>
        <a href='https://github.com/athornton95' target='_blank' rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#8893AF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 inline">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
            </path>
          </svg>
        </a>
        <a href='https://www.linkedin.com/in/alex-thornton-co/' target='_blank' rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#8893AF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 inline mx-4">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
            </path>
            <rect x="2" y="9" width="4" height="12">
            </rect>
            <circle cx="4" cy="4" r="2">
            </circle>
          </svg>
        </a>
        <a href='https://www.instagram.com/yourgoodpal_al/' target='_blank' rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 inline">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
        </a>
      </div>
      <div className='px-4 sm:px-0 text-center'>
        <p>Built by<a href='https://github.com/athornton95/portfolio-2021' target='_blank' rel="noopener noreferrer" className='btn-inline ml-2'>Alex Hopkins</a></p>
        <p>Design deeply inspired by
          <a href='https://github.com/bchiang7/v4' target='_blank' rel="noopener noreferrer" className='btn-inline ml-2'>Brittany Chiang</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
