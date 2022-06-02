import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { getTodo, getAllTodos } from '../thunks/todoThunk';

interface TodoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const { className, ...restProps } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodo(1));
  }, []);

  const isLoading = useAppSelector((state) => state.todos.loading);
  const pendingAction = useAppSelector((state) => state.todos.pendingAction);
  const todo = useAppSelector((state) => state.todos.todo);

  if (isLoading) {
    return (
      <div>
        {pendingAction === getTodo.pending.type
          ? 'loading Todo'
          : 'Loading All Todo'}
        ....
      </div>
    );
  }

  const onClick = () => {
    dispatch(getAllTodos());
  };

  return (
    <div {...restProps} className={classnames(className)}>
      {todo?.title}
      <button onClick={onClick}>change</button>
    </div>
  );
};

Todo.defaultProps = {};

export default Todo;
