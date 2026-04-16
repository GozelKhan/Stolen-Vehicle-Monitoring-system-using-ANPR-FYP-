/** @format */

<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/authApi";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import "../../styles/Auth.css";
import AuthLinks from "../../components/AuthLinks";
import PasswordInput from "../../components/PasswordInput";

export default function Signup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user"); // default role

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    cnic: "",
    organizationName: "",
    organizationCode: "",
    role: "user",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Universal change handler
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // When user changes the dropdown role
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    // Update role inside formData
    setFormData((prev) => ({
      ...prev,
      role: selectedRole,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await registerUser(formData);
      setMessage("Account created successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Error response:", err);
      setError(err.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}

        {/* Role Dropdown */}
        <div className="mb-4">
          <label>Select Role</label>
          <select name="role" value={role} onChange={handleRoleChange}>
            <option value="user">User</option>
            <option value="admin">Admin (Organization)</option>
          </select>
        </div>

        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Phone Number"
          name="phoneNumber"
          type="number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        {/* USER FIELDS */}
        {role === "user" && (
          <InputField
            label="CNIC"
            name="cnic"
            type="text"
            value={formData.cnic}
            onChange={handleChange}
          />
        )}

        {/* ADMIN FIELDS */}
        {role === "admin" && (
          <>
            <InputField
              label="Organization Name"
              name="organizationName"
              type="text"
              value={formData.organizationName}
              onChange={handleChange}
            />

            <InputField
              label="Organization Code"
              name="organizationCode"
              type="text"
              value={formData.organizationCode}
              onChange={handleChange}
            />
          </>
        )}

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button type="submit" label="Sign Up" style={{color:"#fff"}}/>

        <AuthLinks rightText="Already have an account" rightTo="/login" />
      </form>
    </div>
  );
=======
// React hooks
import { useState } from "react";

// Navigation from React Router
import { useNavigate } from "react-router-dom";

// API function to register a user
import { registerUser } from "../../../api/authApi";

// Reusable UI components
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import PasswordInput from "../../components/PasswordInput";
import AuthLinks from "../../components/AuthLinks";

// Styling
import "../../styles/Auth.css";

export default function Signup() {
const navigate = useNavigate();

// Role state (default = user)
const [role, setRole] = useState("user");

// Form data state
const [formData, setFormData] = useState({
fullName: "",
email: "",
phoneNumber: "",
password: "",
cnic: "",
organizationName: "",
organizationCode: "",
role: "user",
});

// Success and error messages
const [message, setMessage] = useState("");
const [error, setError] = useState("");

// Handle input field changes
const handleChange = (e) =>
setFormData({ ...formData, [e.target.name]: e.target.value });

// Handle role dropdown change
const handleRoleChange = (e) => {
const selectedRole = e.target.value;

```
// Update role state
setRole(selectedRole);

// Update role inside form data
setFormData((prev) => ({
  ...prev,
  role: selectedRole,
}));
```

};

// Form submit handler
const handleSubmit = async (e) => {
e.preventDefault();

```
setMessage("");
setError("");

console.log("Submitting: ", formData);

try {
  // Send signup request to backend
  await registerUser(formData);

  setMessage("Account created successfully!");

  // Redirect to login after signup
  setTimeout(() => navigate("/login"), 1500);

} catch (err) {
  console.log("Error response:", err);

  // Show backend error message
  setError(err.response?.data?.error || "Something went wrong");
}
```

};

return ( <div className="auth-container">

```
  {/* Signup Form */}
  <form className="auth-form" onSubmit={handleSubmit}>
    <h2>Create Account</h2>

    {/* Error message */}
    {error && <p className="error">{error}</p>}

    {/* Success message */}
    {message && <p className="success">{message}</p>}

    {/* Role selection dropdown */}
    <div className="mb-4">
      <label>Select Role</label>
      <select name="role" value={role} onChange={handleRoleChange}>
        <option value="user">User</option>
        <option value="admin">Admin (Organization)</option>
      </select>
    </div>

    {/* Full name field */}
    <InputField
      label="Full Name"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
    />

    {/* Email field */}
    <InputField
      label="Email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
    />

    {/* Phone number field */}
    <InputField
      label="Phone Number"
      name="phoneNumber"
      type="number"
      value={formData.phoneNumber}
      onChange={handleChange}
    />

    {/* User-specific field */}
    {role === "user" && (
      <InputField
        label="CNIC"
        name="cnic"
        type="text"
        value={formData.cnic}
        onChange={handleChange}
      />
    )}

    {/* Admin-specific fields */}
    {role === "admin" && (
      <>
        <InputField
          label="Organization Name"
          name="organizationName"
          type="text"
          value={formData.organizationName}
          onChange={handleChange}
        />

        <InputField
          label="Organization Code"
          name="organizationCode"
          type="text"
          value={formData.organizationCode}
          onChange={handleChange}
        />
      </>
    )}

    {/* Password field */}
    <PasswordInput
      label="Password"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />

    {/* Submit button */}
    <Button type="submit" label="Sign Up" />

    {/* Link to login page */}
    <AuthLinks rightText="Already have an account" rightTo="/login" />
  </form>
</div>
```

);
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
}
