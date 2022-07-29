import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Filter from './components/Filter';
import Home from './components/Home';
import Contribute from './components/Contribute';
import Support from './components/Support';
import Bottom from './components/Bottom';

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Router>
      <div className='app-wrap'>
        <Topbar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
        <Sidebar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
        <Filter />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contribute' element={<Contribute />} />
        <Route path='/support' element={<Support />} />
      </Routes>

      <Bottom />
    </Router>
  );
};

export default App;
