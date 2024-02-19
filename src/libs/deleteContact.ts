import CONTACT from '../consts/contact';
import LOCAL_STORAGE from '../consts/localStorage';
import IContact from '../types/IContact';
import getItemFromLocalStorage from './getItemFromLocalStorage';
import setItemToLocalStorage from './setItemToLocalStorage';

function deleteContact(id: number): IContact[] {
    const currentContacts = getItemFromLocalStorage<IContact[]>(
        LOCAL_STORAGE.KEY,
        []
    );

    const deletedContacts = currentContacts.filter(
        (contact) => contact[CONTACT.ID] !== id
    );

    setItemToLocalStorage<IContact[]>(LOCAL_STORAGE.KEY, deletedContacts);

    return deletedContacts;
}

export default deleteContact;
