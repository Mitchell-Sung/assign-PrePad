import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IContact from '../types/IContact';
import useContactActionmenu from '../hooks/useContactActionmenu';
import ROUTE from '../consts/route';

type Props = {
    row: IContact;
};

function ContactActionMenu({ row }: Props) {
    const { navigateToUrl, anchorEl, open, onClick, onClose, onDelete } =
        useContactActionmenu();

    return (
        <>
            <Tooltip title='Action Menu'>
                <IconButton size='small' onClick={onClick}>
                    <MoreVertIcon />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                onClick={onClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    onClick={() =>
                        navigateToUrl(`${ROUTE.CONTACT_EDIT}/${row.id}`)
                    }
                >
                    <ListItemIcon>
                        <EditIcon fontSize='small' />
                    </ListItemIcon>
                    Edit
                </MenuItem>
                <MenuItem onClick={() => onDelete(row.id)}>
                    <ListItemIcon>
                        <DeleteIcon fontSize='small' />
                    </ListItemIcon>
                    Delete
                </MenuItem>
            </Menu>
        </>
    );
}

export default ContactActionMenu;
