import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./style.css";

export default function TopUpId() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    sponsorId: "",
    amount: "10k",
    message: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/topup", formData);
      setMessage(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        sponsorId: "",
        amount: "10k",
        message: "",
      });

      // Show an alert on success
      if (response.data.message.includes("Top-Up submission successful")) {
        alert("Top-Up Successful!");
        navigate("/dashboard");  // Redirect to dashboard after alert
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setMessage("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Top Up Form
        </h2>

        {message && (
          <p
            className={`mb-4 text-center ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-600 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sponsorId" className="block text-gray-600 font-medium mb-2">
            Sponsor ID
          </label>
          <input
            type="text"
            id="sponsorId"
            name="sponsorId"
            value={formData.sponsorId}
            onChange={handleChange}
            placeholder="Enter Sponsor ID"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-600 font-medium mb-2">
            Select Amount
          </label>
          <select
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="10k">10k</option>
            <option value="20k">20k</option>
            <option value="30k">30k</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Enter a message"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
