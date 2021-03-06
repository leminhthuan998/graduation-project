import { lazy } from 'react';

const Dashboard = lazy(() => import('../../../feature/nav/activities/dashboard/ActivityDashboard'));
const GioiThieu = lazy(() => import('../../component/page/GioiThieu'));

const Test = lazy(() => import('../../component/view/Test'));
const _404 = lazy(() => import('../../component/page/404'));


export const frontEndRoutes = [
    { id: '/home/dashboard', component: Dashboard, exact: true },
    { id: '/home/test', component: Test, exact: true },
    { id: '/home/gioi-thieu', component: GioiThieu, exact: true },
    { id: undefined, component: _404 },

];


export const configSideMenu = [

]
