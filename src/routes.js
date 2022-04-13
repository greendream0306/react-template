import { Navigate, useRoutes } from 'react-router-dom';

import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import NotFound from './pages/Page404';
import Login from './pages/Login';
import Register from './pages/Register';

import DashboardLayout from './layouts/dashboard';

export default function Router() {
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
        },
        {
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
                { path: '/', element: <Navigate to="/dashboard" /> },
                { path: '*', element: <Navigate to="/404" /> },
                { path: '404', element: <NotFound /> },
                { path: 'login', element: <Login /> },
                { path: 'register', element: <Register /> },
            ],
        },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}