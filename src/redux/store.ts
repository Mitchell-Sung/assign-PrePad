import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from '../redux/slices/contactsSlice';

const store = configureStore({
    reducer: contactsSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
