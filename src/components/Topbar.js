import menuBtn from '../media/menu.svg';

const Topbar = ({ setToggleMenu, toggleMenu }) => {
  const togglemenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='logo' to='/'>
          EthList
        </div>

        <div className='menu-btn-wrap'>
          <img src={menuBtn} onClick={togglemenu} alt='menu button' />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
