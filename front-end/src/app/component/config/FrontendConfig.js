import { lazy } from 'react';

const Dashboard = lazy(() => import('../../../feature/nav/activities/dashboard/ActivityDashboard'));
const Test = lazy(() => import('../../component/view/Test'));


export const frontEndRoutes = [
    { id: '/home/dashboard', component: Dashboard, exact: true },
    { id: '/home/test', component: Test, exact: true },   
];



