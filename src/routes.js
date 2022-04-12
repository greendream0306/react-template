import { Navigate, useRoutes } from 'react-router-dom';

import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import NotFound from './pages/Page404';

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
                // { path: '/', element: <Navigate to="/dashboard/app" /> },
                { path: '*', element: <Navigate to="/404" /> },
                { path: '404', element: <NotFound /> },
            ],
        },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}