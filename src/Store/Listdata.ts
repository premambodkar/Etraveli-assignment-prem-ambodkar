import { createSlice } from '@reduxjs/toolkit';

interface ListState {
    items: any[];
}

const initialState: ListState = {
    items: [],
};

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
      setList: (state, action: PayloadAction<string[]>) => {
        state.items = action.payload; // Replace the entire list
      },
      clearList: (state) => {
        state.items = []; // Clear the list
      },
    },
  });

export const { getList } = listdata.actions;

export default listdata.reducer;

