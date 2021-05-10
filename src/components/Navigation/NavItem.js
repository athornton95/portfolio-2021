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

  return (
    <a href={path} className={`${type === 'primary' ? 'flex' : 'block'} ${type === 'primary' ? 'nav-primary-item' : 'nav-mobile-item'} ${type === 'primary' && isActive ? 'nav-primary-item-active' : ''} ${type === 'primary' && !isActive ? 'nav-primary-item-inactive' : ''} ${type === 'mobile' && isActive ? 'nav-mobile-item-active' : ''} ${type === 'mobile' && !isActive ? 'nav-primary-item-inactive' : ''}`}>
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
