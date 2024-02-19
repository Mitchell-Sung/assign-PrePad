import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useNavigateTo from './useNavigateTo';
import { RootState } from '../redux/store';
import { createContactReducer } from '../redux/slices/contactsSlice';
import IContact from '../types/IContact';
import ROUTE from '../consts/route';
import initNewContact from '../libs/initNewContact';
import validateNewContact from '../libs/validateNewContact';

function useContactAdd() {
    const dispatch = useDispatch();
    const navigateToUrl = useNavigateTo();
    const contacts = useSelector((state: RootState) => state.contacts);

    const [contact, setContact] = useState<IContact>(initNewContact(contacts));

    const onHandle = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setContact((prev) => ({
            ...prev,
            [e.target.name]: e.target.value.trim(),
        }));
    };

    const onReset = () => setContact(initNewContact(contacts));

    const onSubmit = () => {
        const newContact = validateNewContact(contact, contacts);
        if (newContact) {
            dispatch(createContactReducer(newContact));
            navigateToUrl(ROUTE.CONTACT);
        }
    };

    return { contact, onHandle, onReset, onSubmit };
}

export default useContactAdd;
