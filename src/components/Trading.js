import React from 'react';
import List from './List';
import Group from './Group';
import { random } from '../utils/functions';
import { arr21 } from '../database/list';

const Trading = () => {
  return (
    <section>
      <h2>Trading</h2>
      <Group
        summary='Trading'
        details={
          <ul>
            {arr21.map((list) => {
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

export default Trading;
