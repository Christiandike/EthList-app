import React from 'react';
import List from './List';
import Group from './Group';
import { random } from '../utils/functions';
import { arr23 } from '../database/list';

const Programming = () => {
  return (
    <section>
      <h2>Programming</h2>
      <Group
        summary='Programming'
        details={
          <ul>
            {arr23.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
    </section>
  );
};

export default Programming;
