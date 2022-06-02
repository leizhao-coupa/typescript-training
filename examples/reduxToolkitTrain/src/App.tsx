import React from 'react';
import styles from './App.module.scss';
import { CounterCtx, ctx1, ctx2 } from './context/CounterContext';
import Counter from './components/Counter';
import Todo from './components/Todo';

const App: React.FC = () => {
  // useGetPostsQuery();

  return (
    <div className={styles.App}>
      <h1>App</h1>
      <hr />
      <CounterCtx.Provider value={ctx2}>
        <Counter />
      </CounterCtx.Provider>
      <hr />
      <Todo />
    </div>
  );
};

export default App;
