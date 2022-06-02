import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTodo, getAllTodos } from '../thunks/todoThunk';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todo?: Todo;
  loading?: boolean;
  pendingAction?: string | null;
}

const initialState: TodoState = {};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const asyncActions = [getTodo, getAllTodos];
    asyncActions.forEach((asyncAction) => {
      builder
        .addCase(asyncAction.pending, (state, payload) => {
          state.loading = true;
          state.pendingAction = payload.type;
        })
        .addCase(asyncAction.rejected, (state) => {
          state.loading = false;
          state.pendingAction = null;
        });
    });

    builder
      .addCase(getTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.loading = false;
        state.todo = action.payload;
      })
      .addCase(getAllTodos.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

const todoReducer = todoSlice.reducer;
export default todoReducer;
