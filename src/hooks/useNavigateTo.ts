import { useNavigate } from 'react-router-dom';

type StateType = {
    [key: string]: unknown;
};

function useNavigateTo(): (url: string, state?: StateType) => void {
    const navigate = useNavigate();

    const navigateToUrl = (url: string, state?: StateType) =>
        navigate(url, { state });

    return navigateToUrl;
}

export default useNavigateTo;
