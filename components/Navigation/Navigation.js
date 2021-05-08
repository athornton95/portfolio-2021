import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import NavItem from './NavItem';

// TODO:

const Navigation = ({ isInViewPort, topOfViewPort }) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavActive(prevState => !prevState);
  }

  const navLinks = [
    {
      path: '#about',
      title: 'About'
    },
    {
      path: '#exprience',
      title: 'Experience'
    },
    {
      path: '#work',
      title: 'Work'
    },
    {
      path: '#contact',
      title: 'Contact'
    }
  ]

  return (
    <nav className='bg-bgPrimary shadow-md sticky z-20 mb-6 sm:mb-11 font-title top-0'>
      <div className='container mx-auto px-2 sm:px-6'>
        <div className='relative flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/'>
              <a>
                <div className='flex ml-2 md:ml-0 self-center'>
                  <Image src="/ah-logo.svg" alt="alex hopkins logo" width={60} height={40}/>
                </div>
              </a>
            </Link>
          </div>
          <div className='flex items-center mr-1 sm:hidden'>
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-primary border border-textPrimary text-textPrimary bg-bgPrimary focus:outline-none'
              onClick={toggleMobileNav}
            >
              <span className='sr-only'>Open main menu</span>
              <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
              <svg className='hidden h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='hidden sm:flex-1 sm:flex sm:justify-end sm:items-stretch'>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-6'>
              {navLinks.map((link, i) => (
                <NavItem
                  key={`primary-${link.path}`}
                  number={i}
                  path={link.path}
                  title={link.title}
                  type='primary'
                  isInViewPort={isInViewPort}
                  topOfViewPort={topOfViewPort}
                />
              ))}
                <Link href='/resume'>
                  <a className='inline-flex px-1 pt-1 pb-0.5 text-sm font-normal box-border'>
                    <div className='self-center border border-textPrimary py-2 px-3 rounded-md text-textSecondary hover:bg-textPrimary hover:text-bgPrimary'>Resume</div>
                  </a>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`sm:hidden nav-mobile text-center ${isMobileNavActive ? '' : 'hidden'}`}>
        <div className='pt-2 pb-4 space-y-1'>
          {navLinks.map((link, i) => (
            <NavItem
              key={`mobile-${link.path}`}
              path={link.path}
              title={link.title}
              type='mobile'
              number={i}
              isInViewPort={isInViewPort}
              topOfViewPort={topOfViewPort}
            />
          ))}
          <Link href='/resume'>
            <a className='inline-flex px-1 pt-1 pb-0.5 text-sm font-normal box-border'>
              <div className='self-center border border-textPrimary py-2 px-3 rounded-md text-textSecondary hover:bg-textPrimary hover:text-bgPrimary'>Resume</div>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;

