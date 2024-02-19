import ErrorBoundary from './components/ErrorBoundary';
import ErrorFallback from './components/ErrorFallback';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

function App() {
    return (
        <ErrorBoundary fallback={<ErrorFallback />}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default App;
