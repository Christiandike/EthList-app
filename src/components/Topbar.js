import { Link } from 'react-router-dom';
import menuBtn from '../media/menu.svg';

const Topbar = ({ setToggleMenu, toggleMenu }) => {
  const togglemenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='logo'>
          <Link to='/'>EthList</Link>
        </div>

        <div className='menu-btn-wrap'>
          <img src={menuBtn} onClick={togglemenu} alt='menu button' />
        </div>

        <div className='nav-options'>
          <div>
            <Link to='/contribute'>How To Contribute</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

