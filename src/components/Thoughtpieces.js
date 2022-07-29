import React from 'react';
import List from './List';
import Group from './Group';
import { random } from '../utils/functions';
import { arr18, arr19, arr20 } from '../database/list';

const Thoughtpieces = () => {
  return (
    <section>
      <h2>Thought pieces</h2>
      <Group
        summary='general'
        details={
          <ul>
            {arr18.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='crowdsales'
        details={
          <ul>
            {arr19.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='dApps and protocols'
        details={
          <ul>
            {arr20.map((list) => {
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

export default Thoughtpieces;
