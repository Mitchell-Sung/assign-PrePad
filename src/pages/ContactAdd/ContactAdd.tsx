import useContactAdd from '../../hooks/useContactAdd';
import ROUTE from '../../consts/route';
import contactAddFields from '../../data/contactAddFields';
import TooltipIconButton from '../../components/TooltipIconButton';
import InputField from '../../components/InputField';
import Paper from '@mui/material/Paper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../../styles/ContactEdit.module.css';

function ContactAdd() {
    const { contact, onHandle, onReset, onSubmit } = useContactAdd();

    return (
        <section>
            <div className={style.title}>
                <TooltipIconButton
                    title='Back to Contact List'
                    icon={<ArrowBackIcon />}
                    url={ROUTE.CONTACT}
                />
                <Typography variant='h5'>Create Contact</Typography>
            </div>
            <Paper component='section' elevation={3} className={style.paper}>
                {contactAddFields.map((field) => (
                    <InputField
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        value={contact[field.name] as string}
                        onChange={field.onChangeRequired ? onHandle : undefined}
                        type={field.type || 'text'}
                    />
                ))}
                <div className={style.buttons}>
                    <Button
                        variant='outlined'
                        className={style.button}
                        onClick={onReset}
                    >
                        Reset
                    </Button>
                    <Button
                        variant='contained'
                        className={style.button}
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </Paper>
        </section>
    );
}

export default ContactAdd;
