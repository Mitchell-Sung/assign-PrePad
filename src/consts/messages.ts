enum MSG {
    ERROR_PARSING_DATA = 'An error occurred while parsing the data from localStorage:',
    ERROR_SAVING_DATA = 'An error occurred while saving the data to localStorage:',
    VALID_EMAIL = 'Invalid email format.',
    VALID_EMAIL_DUPLICATION = 'This email is already in use.',
    VALID_FIRST_NAME = 'First name must be between 3 and 25 characters.',
    VALID_LAST_NAME = 'Last name must be between 2 and 30 characters if provided.',
    VALID_SUCCESS = 'Validation successful.',
}

export default MSG;
