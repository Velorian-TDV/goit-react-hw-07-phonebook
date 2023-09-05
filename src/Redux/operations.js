import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = `https://64f4c6cf932537f4051ab0f5.mockapi.io/contacts`;

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, { dispatch, rejectWithValue }) => {
    try {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        });

        // update id, need for deleteContact to update id 
        dispatch(fetchContacts());

        return contact;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const contactDelete = await fetch(`${URL}/${id}`, { method: 'DELETE' });
        const data = await contactDelete.json();
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});