import Auth from "../screens/Auth";
import Layout from "../screens/Layout";

const routes = [
  {
    path: "/",
    component: Layout,
    exact: true
  },
  {
    path: "/auth",
    component: Auth,
    exact: false
  }
];

export default routes;
