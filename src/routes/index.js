import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';
import Loadable from '../Loadable';
import { Typography } from '@mui/material';

import MainLayout from '../layouts/main';

const Lobby = Loadable(lazy(() => import('../pages/Lobby')));
const Upcoming = Loadable(lazy(() => import('../pages/Upcoming')));
const Live = Loadable(lazy(() => import('../pages/Live')));
const Friends = Loadable(lazy(() => import('../pages/Friends')));
const History = Loadable(lazy(() => import('../pages/History')));

const SamplePage = () => {
    return <Typography>sample page</Typography>
}

export default function AppRoutes() {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { 
                    path: '/',
                    element: <Lobby />
                },
                {
                    path: '/lobby',
                    element: <Lobby />
                },
                {
                    path: '/upcoming',
                    element: <Upcoming />
                },
                {
                    path: '/live',
                    element: <Live />
                },
                {
                    path: '/friends',
                    element: <Friends />
                },
                {
                    path: '/history',
                    element: <History />
                }
            ]
        }
    ])
}