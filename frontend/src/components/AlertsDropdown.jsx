/** @format */

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
          Mark all read
        </button>
      </div>

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
              <div className="ad">
                <div className="title">{a.title}</div>
                <div className="desc">{a.desc}</div>
              </div>

              {/* Alert time */}
              <div className="atime">{a.time}</div>
            </div>
          ))
        )}
      </div>

      {/* Footer section */}
      <div className="alerts-footer">
        <a href="/alerts">View all alerts</a>
      </div>
    </div>
  );
};

// Component export
export default AlertsDropdown;
