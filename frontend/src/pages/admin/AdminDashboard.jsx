/** @format */
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import DashboardCard from "../../components/DashboardCard";
import "../../styles/Dashboard.css";
import { FileText, Search, CheckCircle, FileCheck } from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { fetchAllComplaints } from "../../../api/complaintApi";
import VehicleTable from "../../components/VehicleTable";
import MapPreview from "../../components/MapPreview";
import { fetchDetections } from "../../../api/detectionApi";
import { formatTime } from "../../lib/formatTime";
=======

import { useNavigate } from "react-router-dom";
import DashboardCard from "../../components/DashboardCard";
import "../../styles/Dashboard.css";
import { FileText, Search, CheckCircle, User } from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { fetchAllComplaints } from "../../../api/complaintApi";
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
<<<<<<< HEAD
  const [detections, setDetections] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  useEffect(() => {
    if (!user) {
=======
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const accessToken = localStorage.getItem("access") || null;

  useEffect(() => {
    if (!accessToken || !user || user.role !== "admin") {
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
      navigate("/login");
      return;
    }

<<<<<<< HEAD
    const fetchData = async () => {
      try {
        setLoading(true);

        const [complaintsRes, detectionsRes] = await Promise.all([
          fetchAllComplaints(),
          fetchDetections(),
        ]);

        setComplaints(complaintsRes.data.complaints);
        console.log(detectionsRes)
        const formattedDetections = detectionsRes.map((d) => ({
          plate: d.plateNumber,
          model: d.vehicleModel || "Unknown",
          status: d.status || "Detected",
          lastSeen: formatTime(d.detectedAt),
          location: d.location,
        }));


        setDetections(formattedDetections);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
=======
    const fetchComplaints = async () => {
      console.log("Fetching complaints for user:", user.email);
      try {
        setLoading(true);
        const response = await fetchAllComplaints();

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
  }, [user?.email, navigate]);

  const totalReports = complaints.length;
  const pendingInvestigations = complaints.filter(
    (c) => c.status === "investigating"
  ).length;
  const resolvedCases = complaints.filter((c) => c.status === "resolved").length;
  const closedCases = complaints.filter((c) => c.status === "closed").length;

  if (loading) return <Loader />;

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
  const closedCases = complaints.filter((c) => c.status === "closed").length;
  if (loading) return <Loader />;
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
  return (
    <div className="dashboard-container">
      <div className="dashboard-body">
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
<<<<<<< HEAD
            <DashboardCard
              title="Closed Cases"
              value={closedCases}
              icon={<FileCheck />}
            />
          </div>

          <div className="vehicle-map-container">
            <div className="vehicle-card">
              <VehicleTable vehicles={detections} title="Latest Detections" />
            </div>
            <div className="map-card">
              <MapPreview height={300} />
=======
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
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AdminDashboard;
=======
export default AdminDashboard;
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
