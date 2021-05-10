import React from 'react';

const NavItem = (props) => {
  const { path, type, title, number, topOfViewPort } = props;

  const toggleActive = () => {
    if (topOfViewPort === title) {
      return true;
    }
    return false;
  };

  const isActive = toggleActive(path);
  const leadingNumber = `.0${number + 1}`;

  let navItemClass;
  if (type === 'primary'){
    navItemClass = 'flex nav-primary-item';
    if (isActive) {
      navItemClass = navItemClass + ' nav-primary-item-active'
    } else {
      navItemClass = navItemClass + ' nav-primary-item-inactive'
    }
  } else if (type === 'mobile'){
    navItemClass = 'block nav-mobile-item';
  }

  console.log(isActive, path)

  return (
    <a href={path} className={navItemClass}>
      <div className='self-center'>
        <span className='text-textPrimary text-xs'>{leadingNumber}</span><p className='text-textSecondary ml-2 hover:text-textPrimary inline'>{title}</p>
      </div>
    </a>
    /**
     * PurgeCSS:
     * nav-primary-item
     * nav-primary-item-active
     * nav-primary-item-inactive
     * nav-mobile-item
     * nav-mobile-item-inactive
     * nav-mobile-item-active
    */
  );
};

export default NavItem;
