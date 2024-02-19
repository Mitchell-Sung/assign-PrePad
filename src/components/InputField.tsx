import { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

type Props = {
    name: string;
    label: string;
    value: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
};

function InputField({ name, label, value, onChange, type = 'text' }: Props) {
    return (
        <TextField
            required
            name={name}
            label={label}
            value={value}
            onChange={onChange ? onChange : () => {}}
            type={type}
        />
    );
}

export default InputField;
