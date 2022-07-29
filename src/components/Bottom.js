import React from 'react';

const style = {
  backgroundColor: '#000',
  fontSize: '.75rem',
  color: '#999',
  borderTop: '1px solid #999',
  padding: '1rem .75rem 1.25rem .75rem',
  display: 'flex',
  justifyContent: 'space-between',
};

const Bottom = () => {
  return (
    <div className='info' style={style}>
      <div>
        Created By:{' '}
        <a href='https://github.com/Christiandike'>Christian Dike</a>
      </div>
      <div>
        Powered By: <a href='https://github.com/Scanate/EthList'>EthList</a>
      </div>
    </div>
  );
};

export default Bottom;
