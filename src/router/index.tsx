import React from 'react';
import { lazy } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
// lazy懒加载路由，按需加载视图
const Home = lazy(() => import('../views/home'));
const BolgList = lazy(() => import('../views/bolgList'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'bolgList', element: <BolgList /> }
        ]
    }
];

const RouterList: React.FC = () => {
    return useRoutes(routes);
};

export { RouterList };
