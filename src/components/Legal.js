import React from 'react';
import List from './List';
import Group from './Group';
import { random } from '../utils/functions';
import { arr22 } from '../database/list';

const Legal = () => {
  return (
    <section>
      <h2>Legal</h2>
      <Group
        summary='Legal'
        details={
          <ul>
            {arr22.map((list) => {
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

export default Legal;
