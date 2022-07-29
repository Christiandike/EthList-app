import React from 'react';
import ethLogoC from '../media/eth-people.png';
import ethLogoB from '../media/eth-glyph-colored.png';
import ethLogoA from '../media/eth-diamond-rainbow.png';
import ethLogoD from '../media/eth-logo-wordmark.png';
import Introduction from './Introduction';
import Deeper from './Deeper';
import Research from './Research';
import Security from './Security';
import Ecosystem from './Ecosystem';
import Thoughtpieces from './Thoughtpieces';
import Trading from './Trading';
import Programming from './Programming';
import Legal from './Legal';
import Title from './Title';

const Home = () => {
  return (
    <div className='home-wrap'>
      <Title />
      <Introduction />
      <div className='eth-logo'>
        <img src={ethLogoA} alt='Logo of Ethereum' />
      </div>
      <Deeper />
      <Research />
      <Security />
      <div className='eth-logo'>
        <img src={ethLogoB} alt='Logo of Ethereum' />
      </div>
      <Ecosystem />
      <Thoughtpieces />
      <div className='eth-logo eth-logo-c' alt='A community of Ethereum users'>
        <img src={ethLogoC} />
      </div>
      <Trading />
      <Programming />
      <Legal />
      <div className='eth-logo eth-logo-c eth-logo-d'>
        <img src={ethLogoD} alt='Logo of Ethereum' />
      </div>
    </div>
  );
};

export default Home;
