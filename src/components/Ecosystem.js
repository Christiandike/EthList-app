import React from 'react';
import List from './List';
import Group from './Group';
import { random } from '../utils/functions';
import { arr13, arr14, arr15, arr16, arr17 } from '../database/list';

const Ecosystem = () => {
  return (
    <section>
      <h2>Ecosystem</h2>
      <Group
        summary='conferences and workshops'
        details={
          <ul>
            {arr13.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='newsletters'
        details={
          <ul>
            {arr15.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='youtube channels'
        details={
          <ul>
            {arr17.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='news'
        details={
          <ul>
            {arr16.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='ethereum block explorers'
        details={
          <ul>
            {arr14.map((list) => {
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

export default Ecosystem;
