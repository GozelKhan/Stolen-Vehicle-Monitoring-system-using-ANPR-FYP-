/** @format */
import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useNavigate, useParams } from "react-router-dom";
=======
<<<<<<< HEAD
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/AlertDetails.css";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import { fetchAlertDetails, markAlertAsRead } from "../../../api/alertApi";
import { ArrowLeft } from "lucide-react";

export default function AlertDetailsPage() {
  const navigate = useNavigate();
=======
import { useParams } from "react-router-dom";
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
import "../../styles/AlertDetails.css";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import { fetchAlertDetails, markAlertAsRead } from "../../../api/alertApi";
import { ArrowLeft } from "lucide-react";

export default function AlertDetailsPage() {
<<<<<<< HEAD
  const navigate = useNavigate();
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
  const { alertId } = useParams();
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    fetchDetails();
=======
<<<<<<< HEAD
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const data = await fetchAlertDetails(alertId);
      console.log(data)
      setAlert(data);
      setIsRead(data.isRead);
    } catch (err) {
      console.error("Error fetching alert details:", err);
      setAlert(null);
=======
    fetchAlertDetails();
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
  }, []);

  const fetchDetails = async () => {
    try {
      const data = await fetchAlertDetails(alertId);
      console.log(data)
      setAlert(data);
      setIsRead(data.isRead);
    } catch (err) {
      console.error("Error fetching alert details:", err);
<<<<<<< HEAD
      setAlert(null);
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/alerts");
    }
  };

<<<<<<< HEAD
=======
  const handleMarkAsRead = async () => {
    try {
      await markAlertAsRead(alertId);
      setIsRead(true);
    } catch (err) {
      console.error("Error marking alert as read:", err);
=======
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
  const handleMarkAsRead = async () => {
    try {
      await markAlertAsRead(alertId);
      setIsRead(true);
    } catch (err) {
<<<<<<< HEAD
      console.error("Error marking alert as read:", err);
=======
      console.error(err);
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
    }
  };

  if (loading) return <Loader />;

<<<<<<< HEAD
  if (!alert) return <p className="alert-error">Alert not found or has been deleted.</p>;

  return (
    <div className="alert-details-container">
      <button className="back-button" onClick={goBack}>
        <ArrowLeft size={18} /> Back
      </button>
=======
<<<<<<< HEAD
  if (!alert) return <p className="alert-error">Alert not found or has been deleted.</p>;

  return (
    <div className="alert-details-container">
      <button className="back-button" onClick={goBack}>
        <ArrowLeft size={18} /> Back
      </button>
=======
  if (!alert)
    return <p className="alert-error">Alert not found or has been deleted.</p>;

  return (
    <div className="alert-details-container">
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
      <h2>Alert Details</h2>

      <div className="alert-card">
        <div className="alert-info">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
          <h3>Alert Information</h3>
          <p><strong>Message:</strong> {alert.alertMessage || "N/A"}</p>
          <p><strong>Type:</strong> {alert.alertType || "N/A"}</p>
          <p><strong>Sent At:</strong> {alert.sentAt ? new Date(alert.sentAt).toLocaleString() : "N/A"}</p>
<<<<<<< HEAD
=======
=======
          <h3>Vehicle Information</h3>
          <p>
            <strong>Plate Number:</strong> {alert.plateNumber}
          </p>
          <p>
            <strong>Model:</strong> {alert.vehicleModel}
          </p>
          <p>
            <strong>Color:</strong> {alert.vehicleColor}
          </p>

          <h3>Detection Details</h3>
          <p>
            <strong>Detected At:</strong> {alert.detectedAt}
          </p>
          <p>
            <strong>Location:</strong> {alert.detectedLocation}
          </p>
          <p>
            <strong>Possible Route:</strong> {alert.predictedRoute || "N/A"}
          </p>

          <h3>Owner</h3>
          <p>
            <strong>Email:</strong> {alert.ownerEmail}
          </p>
          <p>
            <strong>CNIC:</strong> {alert.ownerCnic}
          </p>
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

          <div className="alert-status">
            <span className={isRead ? "status-read" : "status-unread"}>
              {isRead ? "Read" : "Unread"}
            </span>
          </div>

          {!isRead && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
            <Button
              label="Mark as Read"
              onClick={handleMarkAsRead}
              style={{ width: "auto", color: "#FFF" }}
            />
<<<<<<< HEAD
=======
=======
            <Button label="Mark as Read" onClick={handleMarkAsRead} />
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
          )}
        </div>

        {alert.alertImage && (
          <div className="alert-image">
            <img src={alert.alertImage} alt="Alert" />
          </div>
        )}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
