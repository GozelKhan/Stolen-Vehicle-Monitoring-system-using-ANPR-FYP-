/** @format */
import { useState } from "react";
import "../../styles/Complain.css";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { registerComplaint } from "../../../api/complaintApi";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import Loader from "../../components/Loader";
=======
<<<<<<< HEAD
import Loader from "../../components/Loader";
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

export default function SubmitComplaintPage() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);
=======
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    ownerCnic: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleVariant: "",
    vehicleColor: "",
    plateNumber: "",
    chassisNumber: "",
    complaintDescription: "",
    vehiclePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/"); // fallback route if no history
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setLoading(true);
=======
<<<<<<< HEAD
    setLoading(true);
=======

>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
    // Auto fill user data if user is normal user
    let finalData = { ...formData };
    if (user && user.role === "user") {
      finalData.ownerName = user.fullName;
      finalData.ownerEmail = user.email;
      finalData.ownerPhone = user.phoneNumber;
      finalData.ownerCnic = user.cnic;
    }

    const form = new FormData();
    for (let key in finalData) {
      form.append(key, finalData[key]);
    }

    try {
<<<<<<< HEAD
      console.log(finalData)
=======
<<<<<<< HEAD
      console.log(finalData)
=======
      console.log("Submitting complaint with data:", finalData);
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
      const response = await registerComplaint(finalData);
      if (response.data.email_status.includes("Failed")) {
        setMessage(
          "Complaint registered successfully, but email could not be sent."
        );
      } else {
        setMessage("Complaint registered successfully and email sent!");
      }
      // Reset form
      setFormData({
        ownerEmail: "",
        ownerPhone: "",
        ownerCnic: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleVariant: "",
        vehicleColor: "",
        plateNumber: "",
        chassisNumber: "",
        complaintDescription: "",
        vehiclePicture: null,
      });
    } catch (error) {
      setError("Something went wrong! Try again");
      console.error("Error submitting complaint:", error);
<<<<<<< HEAD
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loader />;
=======
<<<<<<< HEAD
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loader />;
=======
    }
  };

>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
  return (
    <div className="complaint-container">
      <button className="back-button" onClick={goBack}>
        <ArrowLeft size={18} /> Back
      </button>
      <h2>Submit a Complaint</h2>
      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}
      <form className="complaint-form" onSubmit={handleSubmit}>
        {user?.role === "admin" && (
          <>
            <h3>Owner Details</h3>
            <div className="form-row">
              <InputField
                label="Owner Email"
                name="ownerEmail"
                type="email"
                value={formData.ownerEmail}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
                placeholder={"Ex. example@example.com"}
                onChange={handleChange}
                style={{ width: "90%" }}
              />
              <InputField
                label="Owner Name"
                name="ownerName"
                type="text"
                value={formData.ownerName}
                placeholder={"Ex. Ali"}
<<<<<<< HEAD
=======
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
                onChange={handleChange}
                style={{ width: "90%" }}
              />

              <InputField
                label="Owner Phone"
                name="ownerPhone"
                type="text"
                value={formData.ownerPhone}
<<<<<<< HEAD
                placeholder={"Ex. 0332332332"}
=======
<<<<<<< HEAD
                placeholder={"Ex. 0332332332"}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
                onChange={handleChange}
                style={{ width: "90%" }}
              />
            </div>

            <InputField
              label="Owner CNIC"
              name="ownerCnic"
              type="text"
              value={formData.ownerCnic}
<<<<<<< HEAD
              placeholder={"Ex. 32123-1233231-2"}
=======
<<<<<<< HEAD
              placeholder={"Ex. 32123-1233231-2"}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
              onChange={handleChange}
              style={{ width: "90%" }}
            />
          </>
        )}

        <h3>Vehicle Details</h3>

        <div className="form-row">
          <InputField
            label="Make"
            name="vehicleMake"
            value={formData.vehicleMake}
<<<<<<< HEAD
            placeholder={"Ex. Honda"}
=======
<<<<<<< HEAD
            placeholder={"Ex. Honda"}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
            onChange={handleChange}
            style={{ width: "90%" }}
          />

          <InputField
            label="Model"
            name="vehicleModel"
            value={formData.vehicleModel}
<<<<<<< HEAD
            placeholder={"Ex. 2025"}
=======
<<<<<<< HEAD
            placeholder={"Ex. 2025"}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
            onChange={handleChange}
            style={{ width: "90%" }}
          />
        </div>

        <div className="form-row">
          <InputField
            label="Variant"
            name="vehicleVariant"
            value={formData.vehicleVariant}
<<<<<<< HEAD
            placeholder={"Ex. VXL"}
=======
<<<<<<< HEAD
            placeholder={"Ex. VXL"}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
            onChange={handleChange}
            style={{ width: "90%" }}
          />

          <InputField
            label="Color"
            name="vehicleColor"
            value={formData.vehicleColor}
            onChange={handleChange}
<<<<<<< HEAD
            placeholder={"Ex. Black"}
=======
<<<<<<< HEAD
            placeholder={"Ex. Black"}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
            style={{ width: "90%" }}
          />
        </div>

        <div className="form-row">
          <InputField
            label="Plate Number"
            name="plateNumber"
            value={formData.plateNumber}
<<<<<<< HEAD
            placeholder={"Ex. AAA-123"}
=======
<<<<<<< HEAD
            placeholder={"Ex. AAA-123"}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
            onChange={handleChange}
            style={{ width: "90%" }}
          />

          <InputField
            label="Chassis Number"
            name="chassisNumber"
            value={formData.chassisNumber}
<<<<<<< HEAD
            placeholder={"Ex. 4562ASA5621"}
=======
<<<<<<< HEAD
            placeholder={"Ex. 4562ASA5621"}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
            onChange={handleChange}
            style={{ width: "90%" }}
          />
        </div>

        <label>Complaint Description</label>
        <textarea
          name="complaintDescription"
          rows="4"
          value={formData.complaintDescription}
<<<<<<< HEAD
          placeholder={"Ex. White Honda Civic got stolen on 12th May from main murree road..."}
=======
<<<<<<< HEAD
          placeholder={"Ex. White Honda Civic got stolen on 12th May from main murree road..."}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
          onChange={handleChange}
        />

        <InputField
          label="Upload Vehicle Image"
          type="file"
          name="vehiclePicture"
          onChange={handleChange}
          style={{ width: "90%" }}
        />

        <Button label="Submit Complaint" type="submit" />
      </form>
    </div>
  );
}
