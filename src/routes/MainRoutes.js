import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import RoomPage from 'views/pages/RoomPage';
import RoommatesPage from 'views/pages/RoommatesPage';
import Homepage from 'views/pages/Homepage';
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Homepage />
        },
        {
            path: 'rooms',
            element: <RoomPage />
        },
        {
            path: 'roommates',
            element: <RoommatesPage />
        }
    ]
};

export default MainRoutes;
