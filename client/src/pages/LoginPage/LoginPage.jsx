import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("/login", { loginId, password });
      if (response.status === 200) {
        alert("Login successful");
        localStorage.setItem("isLoggedIn", "true");
        setRedirect(true);
      }
    } catch (err) {
      if (err.response) {
        const { status } = err.response;
        if (status === 404) {
          alert("User not found. Please register.");
        } else if (status === 401) {
          alert("Invalid password. Please try again.");
        } else {
          alert("Login failed. Please try again later.");
        }
      } else {
        alert("An unexpected error occurred.");
      }
    }
  }

  if (redirect) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Please login to your account</p>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <input
            type="text"
            value={loginId}
            onChange={(ev) => setLoginId(ev.target.value)}
            placeholder="Your Login ID"
            className="login-input"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Password"
            className="login-input"
            required
          />
          <button className="login-button">Login</button>
          <div className="login-footer">
            Don’t have an account?{" "}
            <Link className="login-link" to="/register">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
