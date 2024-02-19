import CONTACT from '../consts/contact';

interface IContact {
    [CONTACT.ID]: number;
    [CONTACT.EMAIL]: string;
    [CONTACT.FIRST_NAME]: string;
    [CONTACT.LAST_NAME]: string;
}

export default IContact;
