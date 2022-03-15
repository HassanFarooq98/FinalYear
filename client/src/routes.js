/// Main Routes
import Dashboard from "./component/dashboard/dashboard";
import Lab from "./component/labs/Lab";
import Logout from "./component/logout/logout";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "LineChartOutlined",
    component: Dashboard,
    layout: "/admin/dashboard",
  },
  {
    path: "/labs",
    name: "Labs",
    icon: "LineChartOutlined",
    component: Lab,
    layout: "/admin/labs",
  },
  {
    path: "/logout",
    name: "Logout",
    icon: "LineChartOutlined",
    component: Logout,
    layout: "/admin/logout",
  }
];