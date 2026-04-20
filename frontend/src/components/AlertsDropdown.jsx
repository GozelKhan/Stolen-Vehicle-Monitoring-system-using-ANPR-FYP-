/** @format */

<<<<<<< HEAD
=======
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
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
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
<<<<<<< HEAD
        <button className="mark-read" onClick={handleMarkAllRead} style={{ color: '#FFF' }}>
=======

        {/* Button to mark all alerts as read */}
        <button
          className="mark-read"
          onClick={() => {
            /* Future API call to mark all alerts as read */
          }}
        >
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
          Mark all read
        </button>
      </div>

<<<<<<< HEAD
=======
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
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
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

<<<<<<< HEAD
=======
              {/* Alert details */}
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
              <div className="ad">
                <div className="title">{a.title}</div>
                <div className="desc">{a.desc}</div>
              </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
              {/* Alert time */}
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
              <div className="atime">{a.time}</div>
            </div>
          ))
        )}
      </div>

<<<<<<< HEAD
      <div className="alerts-footer">
        <a href="alerts">View all alerts</a>
=======
<<<<<<< HEAD
      <div className="alerts-footer">
        <a href="alerts">View all alerts</a>
=======
      {/* Footer section */}
      <div className="alerts-footer">
        <a href="/alerts">View all alerts</a>
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AlertsDropdown;
=======
<<<<<<< HEAD
export default AlertsDropdown;
=======
// Component export
export default AlertsDropdown;
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
