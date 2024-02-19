import MSG from '../consts/messages';

function setItemToLocalStorage<T>(key: string, item: T): void {
    try {
        window.localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
        console.error(MSG.ERROR_SAVING_DATA, error);
    }
}

export default setItemToLocalStorage;
