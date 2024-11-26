import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './style.css';
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
      const response = await axios.post("http://localhost:4000/register", {
        name,
        position,
        state,
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
      <div className="text-center">
        <h1>Registration Successful!</h1>
        <p>
          Your Sponsor ID is: <strong>{generatedId}</strong>
        </p>
        <Link to="/login" className="underline text-blue-600">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Create an Account</h1>
        <form className="max-w-md mx-auto" onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Name"
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
            <option value="Left">Left</option>
            <option value="Right">Right</option>
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
            placeholder="Mobile"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="Email"
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
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already have an account?
            <Link className="underline text-black" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
