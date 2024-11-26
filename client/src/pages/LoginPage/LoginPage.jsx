import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import './style.css';


export default function LoginPage() {
  const [loginId, setLoginId] = useState(""); // Replace email with loginId
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("/login", { loginId, password });

      if (response.status === 200) {
        alert("Login successful");
        setRedirect(true);
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          alert("User not found. Please register.");
        } else if (err.response.status === 401) {
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
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="text"
            value={loginId}
            onChange={(ev) => setLoginId(ev.target.value)}
            placeholder="Your Login ID"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Password"
            required
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don have an account yet?
            <Link className="underline text-black" to="/register">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
