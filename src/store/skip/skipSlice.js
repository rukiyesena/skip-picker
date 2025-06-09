import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  skipList: false,
  selectedSkip: []
};
export const fetchSkipList = createAsyncThunk(
  'skip/fetchSkipList',
  async () => {
    const response = await axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
    return response.data;
  }
);
const skipSlice = createSlice({
  name: 'skip',
  initialState,
  reducers: {
    setSkip: (state, action) => {
      state.skipList = action.payload;
    },
    selectSkip: (state, action) => {
      const selected = action.payload; 
      if (state.selectedSkip?.id == selected?.id) {
        state.selectedSkip = [];
        state.skipList = state.skipList.map(skip => ({
          ...skip,
          selected: false,
        }));
      }
      else {
        state.selectedSkip = selected;
        //Update the selected skip state to selected:true
        state.skipList = state.skipList.map(skip => ({
          ...skip,
          selected: skip.id === selected.id,
        }));
      } 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkipList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkipList.fulfilled, (state, action) => {
        state.loading = false;
        state.skipList = action.payload;
      })
      .addCase(fetchSkipList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSkip, selectSkip } = skipSlice.actions;
export default skipSlice.reducer;
