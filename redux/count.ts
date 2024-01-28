import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,



    
  },
  reducers: {
    addCount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    incCount: (state) => {
      state.count += 1;
    },
    decCount: (state) => {
      state.count -= 1;
    },
  },
});

// Selectors
export const getCount = (state: any) => state.count.count;

// each case under reducers becomes an action
export const { incCount, decCount, addCount } = counterSlice.actions;

export default counterSlice.reducer;
