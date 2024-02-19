import { Outlet } from 'react-router-dom';
import style from '../styles/Layout.module.css';

function Layout() {
    return (
        <main className={style.layout}>
            <Outlet />
        </main>
    );
}

export default Layout;
