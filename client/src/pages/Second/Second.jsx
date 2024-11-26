// import React from "react";
import { FaRegEdit, FaBoxOpen, FaRupeeSign } from "react-icons/fa";
import "./style.css";

export default function Second() {
  const cardData = [
    {
      icon: <FaRegEdit />,
      title: "REGISTRATION",
      description:
        "Just fill up the registration form using your mail ID and other details as required.",
    },
    {
      icon: <FaBoxOpen />,
      title: "SELECT PACKAGE",
      description: "Deposit and buy a package to start your business.",
    },
    {
      icon: <FaRupeeSign />,
      title: "REFER & EARN",
      description: "Refer your Family, Friends, colleagues and don’t miss strangers.",
    },
  ];

  return (
    <div className="how-to-start">
      <header className="how-to-header">
        <h1>
          <span className="logo-text">Grow Organic </span>
          <span className="india-text">INDIA</span>
        </h1>
        <h2>
          <span className="green-text">HOW TO </span>
          <span className="orange-text">START</span>
        </h2>
      </header>
      <div className="grid-container">
        {cardData.map((card, index) => (
          <div className="grid-item" key={index}>
            <div className="icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
