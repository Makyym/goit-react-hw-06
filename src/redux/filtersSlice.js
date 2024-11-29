import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        name: "",
    },
};

const slice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.filters.name = action.payload;
        },
    },
});

export const selectNameFilter = state => state.filter.filters.name;
export const { changeFilter } = slice.actions;
export const filterReducer = slice.reducer;