import Link from 'next/link';

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
    <Link href={path}>
      <a className={`${type === 'primary' ? 'flex' : 'block'} nav-${type}-item nav-${type}-item${isActive ? '-active' : '-inactive'}`}>
        <div className='self-center'>
          <span className='text-textPrimary text-xs'>{leadingNumber}</span><p className='text-textSecondary ml-2 hover:text-textPrimary inline'>{title}</p>
        </div>
      </a>
    </Link>
  );
};

export default NavItem;
