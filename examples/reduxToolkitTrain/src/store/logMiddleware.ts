import { Middleware } from 'redux';
import type { RootState } from './index';

const logMiddlware: Middleware<unknown, RootState> =
  (storeApi) => (next) => (action) => {
    console.log('...before...', action.type);
    next(action);
    console.log('...after...', action.type);
  };

export default logMiddlware;
