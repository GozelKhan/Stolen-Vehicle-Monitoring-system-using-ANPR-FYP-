/** @format */
<<<<<<< HEAD
import "./styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { Home, Camera, MessageSquareWarning, BadgeAlert } from "lucide-react";

const Sidebar = () => {
  const role = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))?.role
    : null;
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink
            to={`/${role}/dashboard/home`}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <Home size={18} /> Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={`/${role}/dashboard/complain`}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <MessageSquareWarning size={18} /> Complaints
          </NavLink>
        </li>

        <li>
          <NavLink
            to={`/${role}/dashboard/my-complaints`}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <BadgeAlert size={18} /> {role === "admin" ? "Manage Complaints" : "My Complaints"}
          </NavLink>
        </li>

        <li>
          <NavLink
            to={`/${role}/dashboard/camera`}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <Camera size={18} /> Camera
          </NavLink>
=======

import "./styles/Sidebar.css";
import { Home, Car, Bell, MessageSquareWarning } from "lucide-react";

const Sidebar = ({ onSelect }) => {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => onSelect("home")}>
          <Home size={18} /> Home
        </li>
        <li onClick={() => onSelect("home")}>
          <MessageSquareWarning size={18} /> Complaints
        </li>
        <li onClick={() => onSelect("vehicles")}>
          <Car size={18} /> Vehicles
        </li>
        <li onClick={() => onSelect("alerts")}>
          <Bell size={18} /> Alerts
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
