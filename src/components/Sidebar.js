import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ setToggleMenu, toggleMenu }) => {
  const handleToggle = () => {
    return setToggleMenu(false);
  };

  if (toggleMenu) {
    return (
      <div className='sidebar-wrap' id='sidebar'>
        <div>
          EthList:
          <span> The Comprehensive Ethereum Reading List</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href='https://github.com/Scanate/EthList'>Github Repo</a>
            </li>
            <li onClick={handleToggle}>
              {' '}
              <Link to='/'>How To Contribute</Link>{' '}
            </li>
            <li onClick={handleToggle}>
              <Link to='/'>Support</Link>{' '}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  return null;
};

export default Sidebar;

