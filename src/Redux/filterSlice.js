import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: ''
};

const filterContact = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => ({
            ...state,
            filter: action.payload
        })
    }
})

export const { setFilter } = filterContact.actions;
export const filterReducer = filterContact.reducer;
export const contactFilter = state => state.filter.filter;