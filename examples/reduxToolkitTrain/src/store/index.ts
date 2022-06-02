import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import todoReducer from '../slice/todoSlice';
import logMiddlware from './logMiddleware';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  // [postApi.reducerPath]: postApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(logMiddlware);
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
