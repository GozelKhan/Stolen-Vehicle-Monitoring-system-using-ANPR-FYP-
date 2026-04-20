/** @format */

import { useNavigate } from "react-router-dom";
import DashboardCard from "../../components/DashboardCard";
import "../../styles/Dashboard.css";
<<<<<<< HEAD
import { FileText, Search, CheckCircle, FileCheck } from "lucide-react";
=======
<<<<<<< HEAD
import { FileText, Search, CheckCircle, FileCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchUserComplaints } from "../../../api/complaintApi";
import Loader from "../../components/Loader";
import VehicleTable from "../../components/VehicleTable";
import MapPreview from "../../components/MapPreview";
import axios from "axios";
import { formatTime } from "../../lib/formatTime";

const Dashboard = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  const [detections, setDetections] = useState([]);
=======
import {FileText, Search, CheckCircle, FileCheck } from "lucide-react";
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
import { useEffect, useState } from "react";
import { fetchUserComplaints } from "../../../api/complaintApi";
import Loader from "../../components/Loader";
import VehicleTable from "../../components/VehicleTable";
import MapPreview from "../../components/MapPreview";
import axios from "axios";
import { formatTime } from "../../lib/formatTime";

const Dashboard = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
<<<<<<< HEAD
  const [detections, setDetections] = useState([]);
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
  const [loading, setLoading] = useState(true);

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
<<<<<<< HEAD
=======
<<<<<<< HEAD

  useEffect(() => {
    if (!user) {
=======
  const accessToken = localStorage.getItem("access") || null;
  console.log("Access Token:", accessToken);
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

  useEffect(() => {
<<<<<<< HEAD
    if (!user) {
=======
    if (!accessToken || !user || user.role !== "user") {
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
      navigate("/login");
      return;
    }

<<<<<<< HEAD
    const fetchData = async () => {
=======
<<<<<<< HEAD
    const fetchData = async () => {
      try {
        setLoading(true);

        // ✅ 1. Fetch user complaints
        const complaintsResponse = await fetchUserComplaints(user.email);
        const userComplaints = complaintsResponse.data.complaints;
        setComplaints(userComplaints);

        // ✅ 2. Fetch detections (already filtered by backend)
        const detectionsResponse = await axios.get(
          "http://127.0.0.1:8000/detections/",
          {
            params: {
              role: user.role,
              email: user.email,
            },
          }
        );

        // ✅ 3. Format detections for table
        const formattedDetections = detectionsResponse.data.map((d) => ({
          plate: d.plateNumber,
          model: d.vehicleModel || "Unknown",
          status: d.status || "Detected",
          lastSeen: formatTime(d.detectedAt),
        }));

        setDetections(formattedDetections);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
=======
    const fetchComplaints = async () => {
      console.log("Fetching complaints for user:", user.email);
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
      try {
        setLoading(true);

        // ✅ 1. Fetch user complaints
        const complaintsResponse = await fetchUserComplaints(user.email);
        const userComplaints = complaintsResponse.data.complaints;
        setComplaints(userComplaints);

        // ✅ 2. Fetch detections (already filtered by backend)
        const detectionsResponse = await axios.get(
          "http://127.0.0.1:8000/detections/",
          {
            params: {
              role: user.role,
              email: user.email,
            },
          }
        );

        // ✅ 3. Format detections for table
        const formattedDetections = detectionsResponse.data.map((d) => ({
          plate: d.plateNumber,
          model: d.vehicleModel || "Unknown",
          status: d.status || "Detected",
          lastSeen: formatTime(d.detectedAt),
        }));

        setDetections(formattedDetections);
      } catch (error) {
<<<<<<< HEAD
        console.error("Error fetching dashboard data:", error);
=======
        console.error("Error Console", error);
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
      } finally {
        setLoading(false);
      }
    };

<<<<<<< HEAD
    fetchData();
  }, [navigate, user?.email, user?.role]);
=======
<<<<<<< HEAD
    fetchData();
  }, [navigate, user?.email, user?.role]);

  // ✅ Stats
  const totalReports = complaints.length;
  const pendingInvestigations = complaints.filter(
    (c) => c.status === "investigating"
  ).length;
  const resolvedCases = complaints.filter(
    (c) => c.status === "resolved"
  ).length;
  const closedCases = complaints.filter(
    (c) => c.status === "closed"
  ).length;
=======
    fetchComplaints();
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

  // ✅ Stats
  const totalReports = complaints.length;
<<<<<<< HEAD
  const pendingInvestigations = complaints.filter(
    (c) => c.status === "investigating"
  ).length;
  const resolvedCases = complaints.filter(
    (c) => c.status === "resolved"
  ).length;
  const closedCases = complaints.filter(
    (c) => c.status === "closed"
  ).length;
=======
  const pendingInvestigations = complaints.filter(c => c.status === "investigating").length;
  const resolvedCases = complaints.filter(c => c.status === "resolved").length;
  const closedCases = complaints.filter(c => c.status === "closed").length;
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

  if (loading) return <Loader />;

  return (
<<<<<<< HEAD
    <div className="dashboard-content">
      <h2>Dashboard Overview</h2>
=======
<<<<<<< HEAD
    <div className="dashboard-content">
      <h2>Dashboard Overview</h2>

      <div className="overview-cards">
        <DashboardCard
          title="Reports Submitted"
          value={totalReports}
          icon={<FileText />}
        />
        <DashboardCard
          title="Pending Investigations"
          value={pendingInvestigations}
          icon={<Search />}
        />
        <DashboardCard
          title="Resolved Cases"
          value={resolvedCases}
          icon={<CheckCircle />}
        />
        <DashboardCard
          title="Closed Cases"
          value={closedCases}
          icon={<FileCheck />}
        />
      </div>

      <div className="vehicle-map-container">
        {/* Table */}
        <div className="vehicle-card">
          <VehicleTable vehicles={detections} title="Latest Detections" />
        </div>

        {/* Map */}
        <div className="map-card">
          <MapPreview height={300} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
=======
    <>
      <div className="dashboard-content">
        <h2>Dashboard Overview</h2>
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

      <div className="overview-cards">
        <DashboardCard
          title="Reports Submitted"
          value={totalReports}
          icon={<FileText />}
        />
        <DashboardCard
          title="Pending Investigations"
          value={pendingInvestigations}
          icon={<Search />}
        />
        <DashboardCard
          title="Resolved Cases"
          value={resolvedCases}
          icon={<CheckCircle />}
        />
        <DashboardCard
          title="Closed Cases"
          value={closedCases}
          icon={<FileCheck />}
        />
      </div>

      <div className="vehicle-map-container">
        {/* Table */}
        <div className="vehicle-card">
          <VehicleTable vehicles={detections} title="Latest Detections" />
        </div>

        {/* Map */}
        <div className="map-card">
          <MapPreview height={300} />
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
