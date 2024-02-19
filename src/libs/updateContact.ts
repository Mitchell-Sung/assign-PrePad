import CONTACT from '../consts/contact';
import LOCAL_STORAGE from '../consts/localStorage';
import IContact from '../types/IContact';
import getItemFromLocalStorage from './getItemFromLocalStorage';
import setItemToLocalStorage from './setItemToLocalStorage';

function updateContact(contact: IContact): IContact[] {
    const currentContacts = getItemFromLocalStorage<IContact[]>(
        LOCAL_STORAGE.KEY,
        []
    );

    const updatedContacts = currentContacts.map((existingContact) => {
        if (existingContact[CONTACT.ID] === contact[CONTACT.ID]) {
            return { ...existingContact, ...contact };
        }
        return existingContact;
    });

    setItemToLocalStorage<IContact[]>(LOCAL_STORAGE.KEY, updatedContacts);

    return updatedContacts;
}

export default updateContact;
