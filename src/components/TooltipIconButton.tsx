import useNavigateTo from '../hooks/useNavigateTo';
import Tooltip from '@mui/material/Tooltip';
import MuiIconButton from '@mui/material/IconButton';

type Props = {
    title: string;
    icon: JSX.Element;
    url: string;
};

function TooltipIconButton({ title, icon, url }: Props) {
    const navigateToUrl = useNavigateTo();

    return (
        <Tooltip arrow title={title}>
            <MuiIconButton onClick={() => navigateToUrl(url)}>
                {icon}
            </MuiIconButton>
        </Tooltip>
    );
}

export default TooltipIconButton;
