import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LOCAL_STORAGE from '../../consts/localStorage';
import IContact from '../../types/IContact';
import initContacts from '../../data/contacts';
import getItemFromLocalStorage from '../../libs/getItemFromLocalStorage';
import deleteContact from '../../libs/deleteContact';
import updateContact from '../../libs/updateContact';
import createContact from '../../libs/createContact';

interface ContactsState {
    contacts: IContact[];
}

const initialState: ContactsState = {
    contacts: getItemFromLocalStorage<IContact[]>(
        LOCAL_STORAGE.KEY,
        initContacts
    ),
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteContactReducer: (state, action: PayloadAction<number>) => {
            state.contacts = deleteContact(action.payload);
        },
        updateContactReducer: (state, action: PayloadAction<IContact>) => {
            state.contacts = updateContact(action.payload);
        },
        createContactReducer: (state, action: PayloadAction<IContact>) => {
            state.contacts = createContact(action.payload);
        },
    },
});

export const {
    deleteContactReducer,
    updateContactReducer,
    createContactReducer,
} = contactsSlice.actions;

export default contactsSlice;
