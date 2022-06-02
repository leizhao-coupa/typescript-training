import React, { useContext } from 'react';
import classnames from 'classnames';
import { useAppSelector } from '../store/hooks';
import { CounterCtx } from '../context/CounterContext';

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const { className, ...restProps } = props;
  const counterCtx = useContext(CounterCtx);

  const count = useAppSelector((state) => state.counter.count);

  const onAdd = () => {
    counterCtx.add?.();
  };
  const onSub = () => {
    counterCtx.sub?.();
  };

  return (
    <div {...restProps} className={classnames(className)}>
      <h2>CurrentCounter: {count}</h2>
      <button onClick={onAdd}>+</button>
      <button onClick={onSub}>-</button>
    </div>
  );
};

Counter.defaultProps = {};

export default Counter;
