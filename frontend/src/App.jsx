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
import "./App.css";

/* Layout */
import DashboardLayout from "./layouts/MainLayout";

/* Authentication Pages */
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyOTP from "./pages/auth/VerifyOtp";
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
import ComplaintMainPage from "./pages/common/MainComplaint";
import CameraMainPage from "./pages/common/Camera";

/* User Pages */
import Dashboard from "./pages/user/Dashboard";

/* Admin Pages */
import AdminDashboard from "./pages/admin/AdminDashboard";
import ConfigureCamera from "./pages/admin/ConfigureCamera";

/**

* Main App Component
* Handles routing for the entire application
  */
  function App() {
  return ( <BrowserRouter> <Routes>
  {/* ================= AUTHENTICATION ROUTES ================= */}

  ```
   {/* User Registration */}
   <Route path="/signup" element={<Signup />} />

   {/* User Login */}
   <Route path="/login" element={<Login />} />

   {/* Forgot Password */}
   <Route path="/forgot-password" element={<ForgotPassword />} />

   {/* OTP Verification */}
   <Route path="/verify-otp" element={<VerifyOTP />} />

   {/* Reset Password */}
   <Route path="/reset-password" element={<ResetPassword />} />

   {/* ================= USER DASHBOARD ROUTES ================= */}

   {/* Base layout for user dashboard */}
   <Route path="/user/dashboard" element={<DashboardLayout />}>
     
     {/* Default dashboard page */}
     <Route index element={<Dashboard />} />

     {/* Dashboard Home */}
     <Route path="home" element={<Dashboard />} />

     {/* Complaint main page */}
     <Route path="complain" element={<ComplaintMainPage />} />

     {/* Search complaints */}
     <Route path="complain/search" element={<SearchComplaintPage />} />

     {/* Submit new complaint */}
     <Route path="complain/submit" element={<SubmitComplaintPage />} />

     {/* Camera monitoring page */}
     <Route path="camera" element={<CameraMainPage />} />
   </Route>

   {/* ================= ADMIN DASHBOARD ROUTES ================= */}

   {/* Base layout for admin dashboard */}
   <Route path="/admin/dashboard" element={<DashboardLayout />}>

     {/* Default admin dashboard */}
     <Route index element={<AdminDashboard />} />

     {/* Admin home page */}
     <Route path="home" element={<AdminDashboard />} />

     {/* Complaint management */}
     <Route path="complain" element={<ComplaintMainPage />} />

     {/* Complaint search */}
     <Route path="complain/search" element={<SubmitComplaintPage />} />

     {/* Submit complaint */}
     <Route path="complain/submit" element={<SubmitComplaintPage />} />

     {/* Camera monitoring */}
     <Route path="camera" element={<CameraMainPage />} />

     {/* Camera configuration (admin only) */}
     <Route path="camera/configure" element={<ConfigureCamera />} />
   </Route>
  ```

     </Routes>
   </BrowserRouter>

);
}

/* Export App component */
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
export default App;
