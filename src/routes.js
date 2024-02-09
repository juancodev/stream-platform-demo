import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Services from "views/admin/services";
import Profile from "views/admin/profile";
import Reports from "views/admin/reports";
// import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";
import SignUp from "views/auth/SignUp";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [{
    name: "Dashboard",
    layout: "/admin",
    path: "",
    icon: < MdHome className = "h-6 w-6" / > ,
    component: < MainDashboard / > ,
  },
  {
    name: "Servicios",
    layout: "/admin",
    path: "services",
    icon: < MdOutlineShoppingCart className = "h-6 w-6" / > ,
    component: < Services / > ,
    secondary: true,
  },
  {
    name: "Reportes",
    layout: "/admin",
    icon: < MdBarChart className = "h-6 w-6" / > ,
    path: "reports",
    component: < Reports / > ,
  },
  {
    name: "Perfil",
    layout: "/admin",
    path: "profile",
    icon: < MdPerson className = "h-6 w-6" / > ,
    component: < Profile / > ,
  },
  {
    name: "Salir",
    layout: "/auth",
    path: "sign-in",
    icon: < MdLock className = "h-6 w-6" / > ,
    component: < SignIn / > ,
  },
  {
    name: "Registro",
    layout: "/auth",
    path: "sign-up",
    icon: < MdLock className = "h-6 w-6" / > ,
    component: < SignUp / > ,
  },
];
export default routes;