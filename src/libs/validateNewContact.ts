import CONTACT from '../consts/contact';
import MSG from '../consts/messages';
import IContact from '../types/IContact';
import validateContact from './validateContact';

function validateNewContact(contact: IContact, contacts: IContact[]) {
    const { isValid, message } = validateContact(contact);

    const isEmailDuplicate = contacts.some(
        (exsitContact) => exsitContact[CONTACT.EMAIL] === contact[CONTACT.EMAIL]
    );

    if (!isValid || isEmailDuplicate) {
        const alertMessage = isValid ? MSG.VALID_EMAIL_DUPLICATION : message;
        alert(alertMessage);
        return null;
    }

    return contact;
}

export default validateNewContact;
