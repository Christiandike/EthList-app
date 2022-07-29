import React from 'react';
import { useState } from 'react';
import { result } from '../database/list';
import { random } from '../utils/functions';
import Input from './Input';

const Filter = () => {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    let value = e.target.value.toLowerCase();
    setQuery(value);
  };

  const match = result.filter((results) => {
    let title = results.title.toLowerCase();
    return title.includes(query);
  });

  if (!query || match.length === 0) {
    return (
      <div className='filter-wrap'>
        <Input
          type='text'
          value={query}
          onChange={handleQuery}
          placeholder='search for articles on ethereum'
        />
      </div>
    );
  }

  if (match.length > 0) {
    return (
      <>
        <div className='filter-wrap'>
          <Input
            type='text'
            value={query}
            onChange={handleQuery}
            placeholder='search for articles on ethereum'
          />
        </div>
        <div className='dropdown'>
          {match.map((results) => {
            return (
              <a href={results.link} key={random()}>
                {' '}
                {results.title}{' '}
              </a>
            );
          })}
        </div>
      </>
    );
  }
};

export default Filter;

