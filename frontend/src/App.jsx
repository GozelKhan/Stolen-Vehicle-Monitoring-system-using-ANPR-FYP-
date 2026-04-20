<<<<<<< HEAD
/** @format */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
=======
<<<<<<< HEAD
/** @format */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";
import DashboardLayout from "./layouts/MainLayout";
=======
/**

* @file App.js
* @description
* Main routing configuration file for the Track Vision web application.
* This file defines all routes for authentication, user dashboard,
* and admin dashboard using React Router DOM.
  */

import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
import "./App.css";
import DashboardLayout from "./layouts/MainLayout";
<<<<<<< HEAD
=======

/* Authentication Pages */
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyOTP from "./pages/auth/VerifyOtp";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import ComplaintMainPage from "./pages/common/MainComplaint";
import SearchComplaintPage from "./pages/common/SearchComplain";
import SubmitComplaintPage from "./pages/common/SubmitComplain";
import CameraMainPage from "./pages/common/Camera";
import VehicleDetailsPage from "./pages/common/VehicleDetails";
import EditProfile from "./pages/common/EditPage";
import AlertsPage from "./pages/common/AlertPage";
import NotFound from "./pages/common/NotFoundPage";
import UserDashboard from "./pages/user/Dashboard";
import UserComplaints from "./pages/user/CompaintPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminComplaints from "./pages/admin/AdminComplaint";
import ConfigureCamera from "./pages/admin/ConfigureCamera";
import AlertDetailsPage from "./pages/common/AlertDetailsPage";
import UnknownVehiclesPage from "./pages/admin/UnknownVehiclesPage";
import DetectionsPage from "./pages/common/DetectionsPage";
import DetectionDetailsPage from "./pages/common/DetectionDetailsPage";

const renderSharedDashboardRoutes = () => (
  <>
    <Route path="complain" element={<ComplaintMainPage />} />
    <Route path="complain/search" element={<SearchComplaintPage />} />
    <Route path="complain/submit" element={<SubmitComplaintPage />} />
    <Route path="camera" element={<CameraMainPage />} />
    <Route path="vehicle-details/:id" element={<VehicleDetailsPage />} />
    <Route path="alerts" element={<AlertsPage />} />
    <Route path="edit-profile" element={<EditProfile />} />
    <Route path="detections" element={<DetectionsPage />} />
    <Route path="detections/:id" element={<DetectionDetailsPage />} />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route path="/user/dashboard" element={<DashboardLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="home" element={<UserDashboard />} />
            {renderSharedDashboardRoutes()}
            <Route path="my-complaints" element={<UserComplaints />} />
            <Route path="alerts/:alertId" element={<AlertDetailsPage />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<DashboardLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="home" element={<AdminDashboard />} />
            {renderSharedDashboardRoutes()}
            <Route path="camera/configure" element={<ConfigureCamera />} />
            <Route path="my-complaints" element={<AdminComplaints />} />
            <Route path="alerts/:alertId" element={<AlertDetailsPage />} />
            <Route path="unknown-vehicles" element={<UnknownVehiclesPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

=======

/* Common Pages */
import SubmitComplaintPage from "./pages/common/SubmitComplain";
import SearchComplaintPage from "./pages/common/SearchComplain";
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
import ComplaintMainPage from "./pages/common/MainComplaint";
import SearchComplaintPage from "./pages/common/SearchComplain";
import SubmitComplaintPage from "./pages/common/SubmitComplain";
import CameraMainPage from "./pages/common/Camera";
import VehicleDetailsPage from "./pages/common/VehicleDetails";
import EditProfile from "./pages/common/EditPage";
import AlertsPage from "./pages/common/AlertPage";
import NotFound from "./pages/common/NotFoundPage";
import UserDashboard from "./pages/user/Dashboard";
import UserComplaints from "./pages/user/CompaintPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminComplaints from "./pages/admin/AdminComplaint";
import ConfigureCamera from "./pages/admin/ConfigureCamera";
import AlertDetailsPage from "./pages/common/AlertDetailsPage";
import UnknownVehiclesPage from "./pages/admin/UnknownVehiclesPage";
import DetectionsPage from "./pages/common/DetectionsPage";
import DetectionDetailsPage from "./pages/common/DetectionDetailsPage";

const renderSharedDashboardRoutes = () => (
  <>
    <Route path="complain" element={<ComplaintMainPage />} />
    <Route path="complain/search" element={<SearchComplaintPage />} />
    <Route path="complain/submit" element={<SubmitComplaintPage />} />
    <Route path="camera" element={<CameraMainPage />} />
    <Route path="vehicle-details/:id" element={<VehicleDetailsPage />} />
    <Route path="alerts" element={<AlertsPage />} />
    <Route path="edit-profile" element={<EditProfile />} />
    <Route path="detections" element={<DetectionsPage />} />
    <Route path="detections/:id" element={<DetectionDetailsPage />} />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route path="/user/dashboard" element={<DashboardLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="home" element={<UserDashboard />} />
            {renderSharedDashboardRoutes()}
            <Route path="my-complaints" element={<UserComplaints />} />
            <Route path="alerts/:alertId" element={<AlertDetailsPage />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<DashboardLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="home" element={<AdminDashboard />} />
            {renderSharedDashboardRoutes()}
            <Route path="camera/configure" element={<ConfigureCamera />} />
            <Route path="my-complaints" element={<AdminComplaints />} />
            <Route path="alerts/:alertId" element={<AlertDetailsPage />} />
            <Route path="unknown-vehicles" element={<UnknownVehiclesPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

<<<<<<< HEAD
=======
/* Export App component */
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
export default App;
