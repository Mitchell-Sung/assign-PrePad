import CONTACT from '../consts/contact';
import LOCAL_STORAGE from '../consts/localStorage';
import IContact from '../types/IContact';
import getItemFromLocalStorage from './getItemFromLocalStorage';
import setItemToLocalStorage from './setItemToLocalStorage';

function createContact(contact: IContact): IContact[] {
    const currentContacts = getItemFromLocalStorage<IContact[]>(
        LOCAL_STORAGE.KEY,
        []
    );

    const newId =
        currentContacts.length > 0
            ? Math.max(
                  ...currentContacts.map((contact) => contact[CONTACT.ID])
              ) + 1
            : 1;

    const newContact: IContact = { ...contact, id: newId };

    const createdContacts = [...currentContacts, newContact];

    setItemToLocalStorage<IContact[]>(LOCAL_STORAGE.KEY, createdContacts);

    return createdContacts;
}

export default createContact;
