import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  items: ListItem[];
  selectedItemId: any;
}

interface ListItem {
  episode_id: number;
  title: string;
  release_date: string;
  opening_crawl: string;
  director: string;
}

const initialState: ListState = {
  items: [],
  selectedItemId: null
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<ListItem[]>) => {
      state.items = action.payload; // Replace the entire list
    },
    selectItem: (state, action: PayloadAction<number>) => {
      state.selectedItemId = state.items.find((item) => item.episode_id === action.payload) || null;
    },
    clearList: (state) => {
      state.items = []; // Clear the list
    },
  },
});

export const { setList, selectItem, clearList } = listSlice.actions;
export default listSlice.reducer;
