import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Layout from "../components/layout";
import Dashboard from "../components/dashboard/Dashboard";
import Welcome from "../components/Welcome";
import ForgetPassword from "../components/auth/ForgetPassword";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const FORGET = "/forgetpassword";
export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";

export const router = createBrowserRouter([
  { path: ROOT, element: <Welcome /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  { path: FORGET, element: <ForgetPassword /> },

  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: USERS,
        element: "Users",
      },
      {
        path: PROFILE,
        element: "User Profile for ID",
      },
    ],
  },
]);
