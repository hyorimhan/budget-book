import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saveMonth: Number(localStorage.getItem('month')),
  itemList: [],
};
export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    setSaveMonth: (state, action) => {
      state.saveMonth = action.payload;
    },
    setItemList: (state, action) => {
      state.itemList = action.payload;
    },
  },
});

export const { setSaveMonth, setItemList } = budgetSlice.actions;
export default budgetSlice.reducer;
