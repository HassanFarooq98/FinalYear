/// Main Routes
import Dashboard from './component/dashboard/dashboard';
import Lab from './component/labs/Lab';
import Logout from './component/logout/logout';

// Accessory Routes
import LabDetails from './component/labdetails/LabDetails';

export const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'LineChartOutlined',
    component: Dashboard,
    layout: '/admin/dashboard',
    accessory: false,
  },
  {
    path: '/labs',
    name: 'Labs',
    icon: 'LineChartOutlined',
    component: Lab,
    layout: '/admin/labs',
    accessory: false,
  },
  {
    path: '/logout',
    name: 'Logout',
    icon: 'LineChartOutlined',
    component: Logout,
    layout: '/admin/logout',
    accessory: false,
  },
  {
    path: '/labDetails',
    name: 'Lab Details',
    icon: 'LineChartOutlined',
    component: LabDetails,
    layout: '/admin/labDetails',
    accessory: true,
  },
];
