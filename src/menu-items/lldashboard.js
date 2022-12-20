// assets
import { IconDashboard, IconLamp2, IconUsers } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconLamp2, IconUsers };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Home',
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'default',
            title: 'Rooms',
            type: 'item',
            url: '/rooms',
            icon: icons.IconLamp2,
            breadcrumbs: false
        },
        {
            id: 'default',
            title: 'Roommates',
            type: 'item',
            url: '/roommates',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
