import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  items: ListItem[];
  selectedItemId: any;
  searchTerm: string;
  sortBy: string;
  sortDirection: 'desc' | 'asc';
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
  selectedItemId: null,
  searchTerm: '',
  sortBy: '',
  sortDirection: 'desc',
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<ListItem[]>) => {
      state.items = action.payload; // Replace the entire list
    },
    selectItem: (state, action: PayloadAction<number>) => {
      state.selectedItemId = state.items.find((item) => item.episode_id === action.payload)?.episode_id || null;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSortDirection: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortDirection = action.payload;
    },
    clearList: (state) => {
      state.items = []; // Clear the list
    },
  },
});

export const { setList, selectItem, setSearchTerm, setSortBy, setSortDirection, clearList } = listSlice.actions;
export default listSlice.reducer;
