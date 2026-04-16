/** @format */
import { useState } from "react";
import "../../styles/SearchComplaint.css";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import {
  searchComplaintForAdmin,
  searchComplaintForUser,
} from "../../../api/complaintApi";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
<<<<<<< HEAD

const PAGE_SIZE = 5;

export default function SearchComplaintPage() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user.role;
  const email = user.email;

  const fetchResults = async (pageNumber = 1) => {
=======
export default function SearchComplaintPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const role = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).role
    : null;
  const email = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).email
    : null;

  const handleSearch = async () => {
    console.log("Searching for:", searchQuery, "With role:", role);
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
    if (!searchQuery.trim()) {
      setError("Please enter Plate Number, CNIC or Chassis Number.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      let res;
<<<<<<< HEAD

      const params = {
        q: searchQuery,
        role,
        email,
        page: pageNumber,
        limit: PAGE_SIZE,
      };

      if (role === "admin") {
        res = await searchComplaintForAdmin(params);
      } else {
        res = await searchComplaintForUser(params);
      }

      setResults(res.data.complaints);
      setPage(res.data.page);
      setTotalPages(res.data.totalPages);

      setSuccessMessage(
        `Showing page ${res.data.page} of ${res.data.totalPages}`
      );
    } catch (err) {
      setResults([]);
      setError("No matching vehicle found.");
      console.error("Error searching complaints:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchResults(1);
  };

  const goBack = () => {
    navigate(-1);
  };
=======
      if (role === "admin") {
        res = await searchComplaintForAdmin(searchQuery, role);
      } else if (role === "user") {
        res = await searchComplaintForUser(searchQuery, role, email);
      }
      console.log("Search response:", res);

      if (Array.isArray(res.data.data) && res.data.data.length > 0) {
        setResults(res.data.data);
        setSuccessMessage(`Found ${res.data.data.length} result(s).`);
      } else {
        setResults([]);
        setError("No matching vehicle found.");
      }
    } catch (err) {
      setResults([]);
      setError(err.response?.data?.error || "Something went wrong!");
    }

    setLoading(false);
  };

      const goBack = () => {
        if (window.history.length > 1) {
          navigate(-1);
        } else {
          navigate("/"); // fallback route if no history
        }
      };
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5

  return (
    <div className="complaint-container">
      <button className="back-button" onClick={goBack}>
        <ArrowLeft size={18} /> Back
      </button>
<<<<<<< HEAD

      <h2>Search Complaint</h2>

=======
      <h2>Search Complaint</h2>

      {/* ALERT MESSAGES */}
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
      {error && <p className="alert-error">{error}</p>}
      {successMessage && <p className="alert-success">{successMessage}</p>}

      {/* SEARCH BAR */}
      <div className="search-bar">
        <InputField
          style={{ width: "180%" }}
          type="text"
          placeholder="Enter Plate / CNIC / Chassis Number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Button
<<<<<<< HEAD
          label={loading ? "Searching..." : "Search"}
          style={{ width: "20%", color: "#fff" }}
=======
          style={{ width: "20%" }}
          label={loading ? "Searching..." : "Search"}
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
          onClick={handleSearch}
          disabled={loading}
        />
      </div>

<<<<<<< HEAD
      {/* RESULTS */}
      <div className="search-results">
        {results.length === 0 && !loading ? (
          <p className="hint-text">No results found.</p>
=======
      {/* RESULTS SECTION */}
      <div className="search-results">
        {results === null ? (
          <p className="hint-text">Search to view results...</p>
        ) : results.length === 0 ? (
          <p>No results found.</p>
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
        ) : (
          results.map((item) => (
            <div key={item.id} className="search-result-item">
              <p>
                <strong>Owner:</strong> {item.ownerName}
              </p>
              <p>
                <strong>Email:</strong> {item.ownerEmail}
              </p>
              <p>
                <strong>Plate:</strong> {item.plateNumber}
              </p>
<<<<<<< HEAD

              <p>
                <strong>Status:</strong>{" "}
                <span className={`status ${item.status}`}>
                  {item.status.toUpperCase()}
                </span>
              </p>

              <Link
                to={`/${role}/dashboard/vehicle-details/${item.id}`}
                className="view-more-link"
              >
=======
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={
                    item.status === "investigating"
                      ? "status investigating"
                      : item.status === "resolved"
                      ? "status resolved"
                      : "status closed"
                  }
                >
                  {item.status.toUpperCase()}
                </span>
              </p>
              <Link to={`/${role}/dashboard/vehicle-details/${item.id}`}>
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
                View More
              </Link>
            </div>
          ))
        )}
      </div>
<<<<<<< HEAD

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => fetchResults(page - 1)}>
            Prev
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => fetchResults(page + 1)}
          >
            Next
          </button>
        </div>
      )}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
    </div>
  );
}
