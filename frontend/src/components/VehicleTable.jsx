/** @format */

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
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
<<<<<<< HEAD
=======

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
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

  return (
    <div className="vehicle-table">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
<<<<<<< HEAD
            {tableColumns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
=======
            <th>Plate No</th>
            <th>Model</th>
            <th>Status</th>
            <th>Last Seen</th>
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v, i) => (
<<<<<<< HEAD
            <>
=======
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
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
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
<<<<<<< HEAD
            </>
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleTable;
