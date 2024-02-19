import MSG from '../consts/messages';
import setItemToLocalStorage from './setItemToLocalStorage';

function getItemFromLocalStorage<T>(key: string, defaultValue: T): T {
    try {
        const item = window.localStorage.getItem(key);

        if (item === null) {
            setItemToLocalStorage(key, defaultValue);
            return defaultValue;
        }

        return JSON.parse(item);
    } catch (error) {
        console.error(MSG.ERROR_PARSING_DATA, error);
        setItemToLocalStorage(key, defaultValue);
        return defaultValue;
    }
}

export default getItemFromLocalStorage;
