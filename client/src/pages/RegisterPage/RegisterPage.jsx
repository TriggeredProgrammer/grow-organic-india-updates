import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [state, setState] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [generatedId, setGeneratedId] = useState(null);

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  async function handleRegisterSubmit(ev) {
    ev.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("/register", {
        name,
        position,
        country: state,
        mobile,
        email,
        password,
      });

      if (response.status === 201) {
        alert("Registration successful!");
        setGeneratedId(response.data.sponsorId);
        setRedirect(true);
      }
    } catch (err) {
      alert("Registration failed. Please try again. " + err);
    }
  }

  if (redirect) {
    return (
      <div className="success-container">
        <h1>Registration Successful!</h1>
        <p>
          Your Sponsor ID is: <strong>{generatedId}</strong>
        </p>
        <Link to="/login" className="success-link">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="register-container">
      {/* <h1 className="register-title">Create an Account</h1> */}
      <form className="register-form" onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          placeholder="Full Name"
          required
        />
        <select
          value={position}
          onChange={(ev) => setPosition(ev.target.value)}
          required
        >
          <option value="" disabled>
            Select Position
          </option>
          <option value="direct">Direct Join</option>
          {/* <option value="Right">Right</option> */}
        </select>
        <select
          value={state}
          onChange={(ev) => setState(ev.target.value)}
          required
        >
          <option value="" disabled>
            Select State
          </option>
          {indianStates.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={mobile}
          onChange={(ev) => setMobile(ev.target.value)}
          placeholder="Mobile Number"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(ev) => setConfirmPassword(ev.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button className="register-button">Register</button>
        <p className="register-footer">
          Already have an account?{" "}
          <Link to="/login" className="register-link">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
