/** @format */

// React hooks
import { useEffect, useState } from "react";

// React router navigation
import { useNavigate } from "react-router-dom";

// API function for login request
import { loginUser } from "../../../api/authApi";

// Reusable UI components
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import PasswordInput from "../../components/PasswordInput";
import AuthLinks from "../../components/AuthLinks";

// Styles
import "../../styles/Auth.css";

export default function Login() {
const navigate = useNavigate();

// Form state for email & password
const [formData, setFormData] = useState({ email: "", password: "" });

// Success & error messages
const [message, setMessage] = useState("");
const [error, setError] = useState("");

// Get stored user and token from localStorage
const user = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user"))
: null;

const accessToken = localStorage.getItem("access") || null;

// Redirect user if already logged in
useEffect(() => {
if (accessToken && user && user.role) {
if (user.role === "admin") {
navigate("/admin/dashboard/home");
return;
}
navigate("/user/dashboard/home");
}
}, [navigate, accessToken, user]);

// Handle input field changes
const handleChange = (e) =>
setFormData({ ...formData, [e.target.name]: e.target.value });

// Handle form submission
const handleSubmit = async (e) => {
e.preventDefault();

```
setMessage("");
setError("");

try {
  // Send login request to backend
  const res = await loginUser(formData);

  console.log("Login response:", res);

  // Store user data and tokens
  localStorage.setItem("user", JSON.stringify(res.data.user));
  localStorage.setItem("access", res.data.access);
  localStorage.setItem("refresh", res.data.refresh);

  setMessage("Login successful!");

  // Redirect based on user role
  if (res.data.user.role === "admin") {
    setTimeout(() => navigate("/admin/dashboard/home"), 1500);
    return;
  }

  setTimeout(() => navigate("/user/dashboard/home"), 1500);

} catch (err) {
  console.error(err);

  // Show error if credentials are invalid
  setError("Invalid credentials, please try again.");
}
```

};

return ( <div className="auth-container">

```
  {/* Login Form */}
  <form className="auth-form" onSubmit={handleSubmit}>
    <h2>Login</h2>

    {/* Error message */}
    {error && <p className="error">{error}</p>}

    {/* Success message */}
    {message && <p className="success">{message}</p>}

    {/* Email input */}
    <InputField
      label="Email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />

    {/* Password input */}
    <PasswordInput
      label="Password"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />

    {/* Submit button */}
    <Button type="submit" label="Login" />

    {/* Authentication links */}
    <AuthLinks
      leftText="Forgot password?"
      leftTo="/forgot-password"
      rightText="Create an account"
      rightTo="/signup"
    />
  </form>
</div>
```

);
}
