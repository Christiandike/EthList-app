import React from 'react';
import List from './List';
import Group from './Group';
import { random } from '../utils/functions';
import { arr9, arr10, arr11 } from '../database/list';

const Research = () => {
  return (
    <section>
      <h2>Research</h2>
      <Group
        summary='proof of stake'
        details={
          <ul>
            {arr9.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='plasma'
        details={
          <ul>
            {arr11.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='sharding'
        details={
          <ul>
            {arr10.map((list) => {
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

export default Research;
