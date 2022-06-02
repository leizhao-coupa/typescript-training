import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    sub: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
  extraReducers: {},
});

export const { add, sub } = counterSlice.actions;

export default counterSlice.reducer;
