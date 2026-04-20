/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../../api/authApi";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import "../../styles/Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ new_password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await resetPassword({
        ...formData,
        email: localStorage.getItem("email"),
      });
      localStorage.removeItem("email");

      setMessage("Password reset successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      setError("Failed to reset password, please try again.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <InputField
          label="Password"
          name="new_password"
          type="password"
          value={formData.new_password}
          onChange={handleChange}
        />
<<<<<<< HEAD
        <Button type="submit" label="Reset" style={{color:"#fff"}} />
=======
<<<<<<< HEAD
        <Button type="submit" label="Reset" style={{color:"#fff"}} />
=======
        <Button type="submit" label="Login" />
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
      </form>
    </div>
  );
}
