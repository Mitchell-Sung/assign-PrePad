import MSG from '../consts/messages';
import IContact from '../types/IContact';
import IValidationResult from '../types/IValidationResult';

function validateContact(contact: IContact): IValidationResult {
    const { email, firstName, lastName } = contact;

    const emailRegex =
        /^(?=.{1,256})(?=.{1,64}@.{1,255}$)(?=.{1,64}[^.]{1,63}@.{1,255}$)(([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)|(".*"))@((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,63}$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, message: MSG.VALID_EMAIL };
    }

    if (!firstName || firstName.length < 3 || firstName.length > 25) {
        return {
            isValid: false,
            message: MSG.VALID_FIRST_NAME,
        };
    }

    if (lastName && (lastName.length < 2 || lastName.length > 30)) {
        return {
            isValid: false,
            message: MSG.VALID_LAST_NAME,
        };
    }

    return { isValid: true, message: MSG.VALID_SUCCESS };
}

export default validateContact;
