/** @format */

import { useNavigate } from "react-router-dom";
import DashboardCard from "../../components/DashboardCard";
import "../../styles/Dashboard.css";
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
import { useEffect, useState } from "react";
import { fetchUserComplaints } from "../../../api/complaintApi";
import Loader from "../../components/Loader";
const Dashboard = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
  const [loading, setLoading] = useState(true);

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
<<<<<<< HEAD

  useEffect(() => {
    if (!user) {
=======
  const accessToken = localStorage.getItem("access") || null;
  console.log("Access Token:", accessToken);

  // Redirects to login if not authenticated
  useEffect(() => {
    if (!accessToken || !user || user.role !== "user") {
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
      navigate("/login");
      return;
    }

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
      try {
        setLoading(true);
        const response = await fetchUserComplaints(user.email);

        if (response.status !== 200) throw new Error("Failed to fetch complaints");

        setComplaints(response.data.complaints);
      } catch (error) {
        console.error("Error Console", error);
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
      } finally {
        setLoading(false);
      }
    };

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

    // Only run when user.email changes (instead of full user object)
  }, [navigate, accessToken, user?.email]);


  const detections = [
    {
      id: 1,
      plate: "ABC-123",
      time: "2 min ago",
      image: "",
    },
    {
      id: 2,
      plate: "XYZ-456",
      time: "10 min ago",
      image: "",
    },
  ];
  const totalReports = complaints.length;
  const pendingInvestigations = complaints.filter(c => c.status === "investigating").length;
  const resolvedCases = complaints.filter(c => c.status === "resolved").length;
  const closedCases = complaints.filter(c => c.status === "closed").length;
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5

  if (loading) return <Loader />;

  return (
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

        <div className="feed-map">
          <div className="detection-feed">
            <h3>Latest Detections</h3>
            {detections.map((item) => (
              <div className="feed-item" key={item.id}>
                <img src={item.image} alt="Vehicle" />
                <div>
                  <p>
                    <strong>Plate:</strong> {item.plate}
                  </p>
                  <p>
                    <small>{item.time}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="map-preview">
            <h3>Map Preview</h3>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14713.637467728397!2d90.38426155!3d23.81033145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663339558619!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
