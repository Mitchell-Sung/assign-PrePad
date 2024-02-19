import Backdrop from '@mui/material/Backdrop';
import MuiCircularProgress from '@mui/material/CircularProgress';

type Props = {
    open?: boolean;
};

function CircularProgress({ open = true }: Props) {
    return (
        <Backdrop
            open={open}
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <MuiCircularProgress color='primary' size={100} thickness={7} />
        </Backdrop>
    );
}

export default CircularProgress;
