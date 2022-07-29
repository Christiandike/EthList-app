import React from 'react';
import List from './List';
import Group from './Group';
import { random } from '../utils/functions';
import {
  arr4,
  arr5,
  arr6,
  arr7,
  arr8,
  arr24,
  arr25,
  arr26,
  arr27,
  arr28,
  arr29,
  arr30,
} from '../database/list';

const Deeper = () => {
  return (
    <section>
      <h2>Deeper into Ethereum</h2>

      <Group
        summary='the annual ethereum developer conference (DevCon)'
        details={
          <ul>
            {arr4.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />

      <Group
        summary='protocol updates and hard-forks'
        details={
          <div className='detail-wrap'>
            <Group
              summary='olympic pre-release'
              details={
                <ul>
                  {arr28.map((list) => {
                    return (
                      <List
                        title={list.title}
                        link={list.link}
                        key={random()}
                      />
                    );
                  })}
                </ul>
              }
            />

            <Group
              summary='frontier public release'
              details={
                <ul>
                  {arr25.map((list) => {
                    return (
                      <List
                        title={list.title}
                        link={list.link}
                        key={random()}
                      />
                    );
                  })}
                </ul>
              }
            />

            <Group
              summary='homestead'
              details={
                <ul>
                  {arr26.map((list) => {
                    return (
                      <List
                        title={list.title}
                        link={list.link}
                        key={random()}
                      />
                    );
                  })}
                </ul>
              }
            />

            <Group
              summary='dao fork'
              details={
                <ul>
                  {arr7.map((list) => {
                    return (
                      <List
                        title={list.title}
                        link={list.link}
                        key={random()}
                      />
                    );
                  })}
                </ul>
              }
            />

            <Group
              summary='dos fork'
              details={
                <ul>
                  {arr24.map((list) => {
                    return (
                      <List
                        title={list.title}
                        link={list.link}
                        key={random()}
                      />
                    );
                  })}
                </ul>
              }
            />

            <Group
              summary='spurious dragon'
              details={
                <ul>
                  {arr30.map((list) => {
                    return (
                      <List
                        title={list.title}
                        link={list.link}
                        key={random()}
                      />
                    );
                  })}
                </ul>
              }
            />

            <Group
              summary='metropolis'
              details={
                <ul>
                  {arr27.map((list) => {
                    return (
                      <List
                        title={list.title}
                        link={list.link}
                        key={random()}
                      />
                    );
                  })}
                </ul>
              }
            />

            <Group
              summary='serenity'
              details={
                <ul>
                  {arr29.map((list) => {
                    return (
                      <List
                        title={list.title}
                        link={list.link}
                        key={random()}
                      />
                    );
                  })}
                </ul>
              }
            />
          </div>
        }
      />

      <Group
        summary='public testnets'
        details={
          <ul>
            {arr8.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='faucets'
        details={
          <ul>
            {arr5.map((list) => {
              return (
                <List title={list.title} link={list.link} key={random()} />
              );
            })}
          </ul>
        }
      />
      <Group
        summary='miscellaneous collections'
        details={
          <ul>
            {arr6.map((list) => {
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

export default Deeper;
