import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodo = createAsyncThunk(
  'todo/getTodo',
  async (id: number, { dispatch }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
  }
);

// UI event occur -> dispatch action (immutable JS object) -> (thunk) many middlwares, one middleware convert immutableJS object to js pureObject -> reduce with action -> update store state -> update UI

// // pending/fullfilled/reject
// export function approveInvoice() {
//   return dispatch => {
//     dispatch(setPendingAction("submittingInvoice"))
//     axios.get('')
//       .then(res => {
//         dispatch({
//           type: 'nmame',
//           invoiceData: res.data
//         })
//       })
//       .catch(err => )
//       .finally(() => dispatch(clearPending()))
//   }
// }

export const getAllTodos = createAsyncThunk(
  'todo/getAllTodos',
  async (_: void, { dispatch }) => {
    // try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    return response.data;
    // } catch (error) {
    //   console.log('error catch');
    // }
  }
);

// export const getAllTodos = createAsyncThunk(
//   'todo/getAllTodos',
//   (_: void, { dispatch }) => {
//     return axios.get(
//       `https://jsonplaceholder.typicode.com/todos`
//     ).then(res => res.data)
//       .catch(err => {});
//   }
// );
