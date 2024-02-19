import { Suspense } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import ROUTE from '../consts/route';
import Contact from '../pages/Contact';
import ContactEdit from '../pages/ContactEdit';
import ContactAdd from '../pages/ContactAdd';
import Layout from './Layout';
import CircularProgress from '../components/CircularProgress';

const router = createBrowserRouter([
    {
        path: ROUTE.ROOT,
        element: <Navigate to={ROUTE.CONTACT} replace />,
    },
    {
        path: ROUTE.CONTACT,
        element: (
            <Suspense fallback={<CircularProgress />}>
                <Layout />
            </Suspense>
        ),
        children: [
            { path: ROUTE.CONTACT, element: <Contact /> },
            { path: ROUTE.CONTACT_EDIT_PARAM, element: <ContactEdit /> },
            { path: ROUTE.CONTACT_ADD, element: <ContactAdd /> },
        ],
    },
]);

export default router;
