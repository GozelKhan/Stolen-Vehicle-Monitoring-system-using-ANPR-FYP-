/** @format */

<<<<<<< HEAD
import { useEffect, useState } from "react";
import "./styles/AlertsDropdown.css";
import {
  fetchUserAlerts,
  markAlertAsRead,
} from "../../api/alertApi";
import { formatTime } from "../lib/formatTime";

const AlertsDropdown = () => {
  const [alerts, setAlerts] = useState([]);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  // ✅ Fetch alerts
  const loadAlerts = async () => {
    try {
      const data = await fetchUserAlerts();

      const formatted = data.map((a) => ({
        id: a.id,
        title: "Stolen vehicle detected",
        desc: `Plate ${a.detection?.complaint?.plateNumber || "Unknown"} at ${a.detection?.locationText || "Unknown location"
          }`,
        time: formatTime(a.sentAt),
        isRead: a.isRead,
      }));

      setAlerts(formatted);
    } catch (error) {
      console.error("Failed to load alerts:", error);
    }
  };

  useEffect(() => {
    loadAlerts();
  }, [user?.email]);

  // ✅ Mark single alert as read
  const handleMarkRead = async (id) => {
    try {
      await markAlertAsRead(id);

      setAlerts((prev) =>
        prev.map((a) =>
          a.id === id ? { ...a, isRead: true } : a
        )
      );
    } catch (error) {
      console.error("Error marking alert as read:", error);
    }
  };

  // ✅ Mark all as read (frontend only for now)
  const handleMarkAllRead = async () => {
    try {
      await Promise.all(alerts.map((a) => markAlertAsRead(a.id)));

      setAlerts((prev) =>
        prev.map((a) => ({ ...a, isRead: true }))
      );
    } catch (error) {
      console.error("Error marking all alerts:", error);
    }
  };

  return (
    <div className="alerts-dropdown" role="list" aria-label="Recent alerts">
      <div className="alerts-header">
        <strong>Alerts</strong>
        <button className="mark-read" onClick={handleMarkAllRead} style={{ color: '#FFF' }}>
=======
// src/components/AlertsDropdown.jsx

// React hooks import kar rahe hain
import { useEffect, useState } from "react";

// CSS file for styling the alerts dropdown
import "./styles/AlertsDropdown.css";

// Temporary mock alerts data (jab tak backend API connect nahi hoti)
const mockAlerts = [
  {
    id: 1,
    title: "Stolen vehicle detected", // Alert title
    desc: "Plate ABC-123 near I-90", // Alert description
    time: "2m", // Time since alert generated
  },
  {
    id: 2,
    title: "Vehicle matched watchlist",
    desc: "Plate XYZ-456 at Mall St",
    time: "20m",
  },
  {
    id: 3,
    title: "Camera offline",
    desc: "Camera #4 lost connection",
    time: "1h",
  },
];

// AlertsDropdown component
const AlertsDropdown = () => {

  // alerts state jo alerts list store karegi
  const [alerts, setAlerts] = useState([]);

  // Component mount hone par alerts load karne ke liye
  useEffect(() => {
    // TODO: future me yahan backend API call hogi
    // Example: fetch("/api/alerts?limit=5")

    // Filhaal mock data set kar rahe hain
    setAlerts(mockAlerts);
  }, []);

  return (

    // Main alerts dropdown container
    <div className="alerts-dropdown" role="list" aria-label="Recent alerts">

      {/* Header section */}
      <div className="alerts-header">
        <strong>Alerts</strong>

        {/* Button to mark all alerts as read */}
        <button
          className="mark-read"
          onClick={() => {
            /* Future API call to mark all alerts as read */
          }}
        >
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
          Mark all read
        </button>
      </div>

<<<<<<< HEAD
      <div className="alerts-list">
        {alerts.length === 0 ? (
          <div className="empty">No alerts</div>
        ) : (
          alerts.map((a) => (
            <div
              key={a.id}
              className={`alert-item ${a.isRead ? "read" : "unread"}`}
              onClick={() => handleMarkRead(a.id)}
            >
              <div className="ai">
                {!a.isRead && <div className="alert-dot" />}
              </div>

=======
      {/* Alerts list section */}
      <div className="alerts-list">

        {/* Agar alerts empty hon */}
        {alerts.length === 0 ? (
          <div className="empty">No alerts</div>
        ) : (

          // Alerts ko map karke UI me show kar rahe hain
          alerts.map((a) => (
            <div key={a.id} className="alert-item">

              {/* Alert icon/dot */}
              <div className="ai">
                <div className="alert-dot" />
              </div>

              {/* Alert details */}
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
              <div className="ad">
                <div className="title">{a.title}</div>
                <div className="desc">{a.desc}</div>
              </div>

<<<<<<< HEAD
=======
              {/* Alert time */}
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
              <div className="atime">{a.time}</div>
            </div>
          ))
        )}
      </div>

<<<<<<< HEAD
      <div className="alerts-footer">
        <a href="alerts">View all alerts</a>
=======
      {/* Footer section */}
      <div className="alerts-footer">
        <a href="/alerts">View all alerts</a>
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AlertsDropdown;
=======
// Component export
export default AlertsDropdown;
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
