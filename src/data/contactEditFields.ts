import CONTACT from '../consts/contact';

const contactEditFields = [
    { name: CONTACT.FIRST_NAME, label: 'First name', onChangeRequired: true },
    { name: CONTACT.LAST_NAME, label: 'Last name', onChangeRequired: true },
    {
        name: CONTACT.EMAIL,
        label: 'Email',
        type: 'email',
        onChangeRequired: false,
    },
];

export default contactEditFields;
