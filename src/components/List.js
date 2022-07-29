import React from 'react';

const List = ({ title, link }) => {
  return (
    <li className='single-article'>
      <a href={link}> {title} </a>
    </li>
  );
};

export default List;
