import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ROUTE from '../../consts/route';
import contactColumns from '../../data/contactColumns';
import ContactTable from '../../components/ContactTable';
import TooltipIconButton from '../../components/TooltipIconButton';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import style from '../../styles/Contact.module.css';

function Contact() {
    const contacts = useSelector((state: RootState) => state.contacts);

    return (
        <section className={style.contact}>
            <Typography variant='h5'>Contact List</Typography>
            <Paper elevation={3}>
                <ContactTable columns={contactColumns} rows={contacts} />
            </Paper>
            <div className={style.tooltipContainer}>
                <TooltipIconButton
                    title='Create a new contact'
                    icon={<AddIcon />}
                    url={ROUTE.CONTACT_ADD}
                />
            </div>
        </section>
    );
}

export default Contact;
