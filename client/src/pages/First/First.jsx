// import React from "react";
import "./style.css";
// import goatImage from "../../assets/goat.jpg";
// import cowImage from "../../assets/cow.jpg";
// import vermiCompostImage from "../../assets/vermiCompost.jpg";

export default function First() {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Header Section */}
        <h2 className="sub-heading">Grow Organic</h2>
        <h1 className="main-heading">GROW ORGANIC INDIA</h1>
        <p className="description">
          <b>Grow Organic India Pvt. Ltd.</b> specializes in sustainable
          agriculture and organic solutions. Focused on goat farming,
          vermicomposting, and cow farming, the company promotes eco-friendly
          practices and high-quality organic products, supporting healthier
          ecosystems and communities.
        </p>

        {/* Image Section */}
        
        {/* <div className="image-container">
          <img src={goatImage} alt="Goat" className="circle-image goat" />
          <img
            src={vermiCompostImage}
            alt="vermicompost"
            className="circle-image compost"
          />
          <img src={cowImage} alt="Cow" className="circle-image cow" />
        </div> */}

        {/* Button Section */}
        <div className="btn-container">
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  );
}
