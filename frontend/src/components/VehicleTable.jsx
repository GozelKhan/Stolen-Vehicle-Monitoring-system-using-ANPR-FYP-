/** @format */

<<<<<<< HEAD
import "../styles/VehicleTable.css";

const VehicleTable = ({ vehicles = [], title = "My Registered Vehicles", columns }) => {
  // Default columns if not provided
  const defaultColumns = [
    { key: "plate", label: "Plate No" },
    { key: "model", label: "Model" },
    { key: "status", label: "Status" },
    { key: "lastSeen", label: "Last Seen" },
  ];

  const tableColumns = columns || defaultColumns;

  return (
    <div className="vehicle-table">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            {tableColumns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
=======
// src/components/VehicleTable.jsx
import React from "react";
import "../styles/components.css";

const VehicleTable = ({ vehicles }) => {
  return (
    <div className="vehicle-table">
      <h2>My Registered Vehicles</h2>
      <table>
        <thead>
          <tr>
            <th>Plate No</th>
            <th>Model</th>
            <th>Status</th>
            <th>Last Seen</th>
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v, i) => (
<<<<<<< HEAD
            <>
            <tr key={i}>
              {tableColumns.map((col) => (
                <td
                  key={col.key}
                  className={col.key === "status" ? `status ${v.status?.toLowerCase()}` : ""}
                >
                  {v[col.key]}
                </td>
              ))}
            </tr>
            </>
=======
            <tr key={i}>
              <td>{v.plate}</td>
              <td>{v.model}</td>
              <td className={`status ${v.status.toLowerCase()}`}>{v.status}</td>
              <td>{v.lastSeen}</td>
            </tr>
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleTable;
