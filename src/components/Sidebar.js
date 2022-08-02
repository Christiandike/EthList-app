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
          <span> The Crowdsourced Ethereum Reading List</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href='https://github.com/Scanate/EthList'>Github Repo</a>
            </li>
            <li onClick={handleToggle}>
              {' '}
              <Link to='/contribute'>How To Contribute</Link>{' '}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  return null;
};

export default Sidebar;

