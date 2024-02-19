import CONTACT from '../consts/contact';
import IContact from '../types/IContact';

function initNewContact(contacts: IContact[]): IContact {
    const maxId = contacts.reduce(
        (max, contact) => Math.max(max, contact[CONTACT.ID]),
        0
    );

    const initContact = {
        [CONTACT.ID]: maxId + 1,
        [CONTACT.EMAIL]: '',
        [CONTACT.FIRST_NAME]: '',
        [CONTACT.LAST_NAME]: '',
    };

    return initContact;
}

export default initNewContact;
