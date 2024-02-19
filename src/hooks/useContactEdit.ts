import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { updateContactReducer } from '../redux/slices/contactsSlice';
import IContact from '../types/IContact';
import useNavigateTo from './useNavigateTo';
import ROUTE from '../consts/route';
import validateContact from '../libs/validateContact';

function useContactEdit() {
    const dispatch = useDispatch();
    const navigateToUrl = useNavigateTo();
    const { contactId } = useParams<{ contactId: string }>();

    const contactFromStore = useSelector((state: RootState) =>
        state.contacts.find((contact) => contact.id === Number(contactId))
    );

    const [contact, setContact] = useState<IContact>(
        contactFromStore as IContact
    );

    const onHandle = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setContact((prev) => ({
            ...prev,
            [e.target.name]: e.target.value.trim(),
        }));
    };

    const onReset = () => setContact(contactFromStore as IContact);

    const onSubmit = () => {
        const { isValid, message } = validateContact(contact);
        if (!isValid) {
            alert(message);
            return;
        }

        dispatch(updateContactReducer(contact));
        navigateToUrl(ROUTE.CONTACT);
    };

    return { contact, onHandle, onReset, onSubmit };
}

export default useContactEdit;
