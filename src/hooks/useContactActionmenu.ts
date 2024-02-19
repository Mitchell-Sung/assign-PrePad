import { useState, MouseEvent } from 'react';
import useNavigateTo from './useNavigateTo';
import { useDispatch } from 'react-redux';
import { deleteContactReducer } from '../redux/slices/contactsSlice';

function useContactActionmenu() {
    const dispatch = useDispatch();
    const navigateToUrl = useNavigateTo();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const onClick = (e: MouseEvent<HTMLElement>) =>
        setAnchorEl(e.currentTarget);

    const onClose = () => setAnchorEl(null);

    const onDelete = (id: number) => {
        dispatch(deleteContactReducer(id));
    };

    return { navigateToUrl, anchorEl, open, onClick, onClose, onDelete };
}

export default useContactActionmenu;
