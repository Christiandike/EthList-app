import React from 'react';
import List from './List';
import Group from './Group';
import { random } from '../utils/functions';
import { arr12 } from '../database/list';

const Security = () => {
  return (
    <section>
      <h2>Security</h2>
      <Group
        summary='Security'
        details={
          <ul>
            {arr12.map((list) => {
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

export default Security;
