import React from 'react';
import List from './List';
import Group from './Group';
import { random } from '../utils/functions';
import { arr1, arr2, arr3 } from '../database/list';

const Introduction = () => {
  return (
    <section>
      <h2>Introduction</h2>
      <Group
        summary='simple explanations of ethereum'
        details={
          <ul>
            {arr1.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='deep explanations of ethereum'
        details={
          <ul>
            {arr2.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='history'
        details={
          <ul>
            {arr3.map((list) => {
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

export default Introduction;
