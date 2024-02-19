import IContact from '../types/IContact';
import ContactActionMenu from './ContactActionMenu';
import CONTACT from '../consts/contact';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

type Props = {
    columns: { id: string; label: string }[];
    rows: IContact[];
};

function ContactTable({ columns, rows }: Props) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.id}>
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row[CONTACT.ID]}>
                            <TableCell>{row[CONTACT.FIRST_NAME]}</TableCell>
                            <TableCell>{row[CONTACT.LAST_NAME]}</TableCell>
                            <TableCell>{row[CONTACT.EMAIL]}</TableCell>
                            <TableCell>
                                <ContactActionMenu row={row} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ContactTable;
