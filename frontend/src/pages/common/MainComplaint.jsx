/** @format */
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
import { useNavigate } from "react-router-dom";
import "../../styles/Complain.css";

export default function ComplaintMainPage() {
  const navigate = useNavigate();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

  // Clean role extraction
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user.role || "user"; // fallback

<<<<<<< HEAD
=======
  return (
    <div className="complaint-main-container">
      <h2 className="complaint-title">Vehicle Complaints</h2>
      <p className="complaint-subtitle">Select an option to proceed:</p>

      <div className="complaint-options">
        {/* Submit Complaint */}
        <div
          className="complaint-card"
          role="button"
          tabIndex={0}
          onClick={() => navigate(`/${role}/dashboard/complain/submit`)}
          onKeyDown={(e) => e.key === "Enter" && navigate(`/${role}/dashboard/complain/submit`)}
=======
  const role = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).role
    : null;
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
  return (
    <div className="complaint-main-container">
      <h2 className="complaint-title">Vehicle Complaints</h2>
      <p className="complaint-subtitle">Select an option to proceed:</p>

      <div className="complaint-options">
        {/* Submit Complaint */}
        <div
          className="complaint-card"
          role="button"
          tabIndex={0}
          onClick={() => navigate(`/${role}/dashboard/complain/submit`)}
<<<<<<< HEAD
          onKeyDown={(e) => e.key === "Enter" && navigate(`/${role}/dashboard/complain/submit`)}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
        >
          <h3>Submit Complaint</h3>
          <p>Report a new stolen or lost vehicle.</p>
        </div>

<<<<<<< HEAD
        {/* Search Complaint */}
=======
<<<<<<< HEAD
        {/* Search Complaint */}
        <div
          className="complaint-card"
          role="button"
          tabIndex={0}
          onClick={() => navigate(`/${role}/dashboard/complain/search`)}
          onKeyDown={(e) => e.key === "Enter" && navigate(`/${role}/dashboard/complain/search`)}
=======
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
        <div
          className="complaint-card"
          role="button"
          tabIndex={0}
          onClick={() => navigate(`/${role}/dashboard/complain/search`)}
<<<<<<< HEAD
          onKeyDown={(e) => e.key === "Enter" && navigate(`/${role}/dashboard/complain/search`)}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
        >
          <h3>Search Complaint</h3>
          <p>Check status or details of existing complaints.</p>
        </div>
      </div>
    </div>
  );
}
