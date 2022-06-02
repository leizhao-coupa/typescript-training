import React from 'react';
import { add, sub } from '../slice/counterSlice';
import store from '../store/index';

const { dispatch } = store;

interface CounterCtxType {
  add: () => {};
  sub: () => {};
}

export const ctx1 = {
  add: () => dispatch(add(1)),
  sub: () => dispatch(sub(1)),
};

export const ctx2 = {
  add: () => dispatch(add(2)),
  sub: () => dispatch(sub(2)),
};

export const CounterCtx: React.Context<Partial<CounterCtxType>> =
  React.createContext({});
