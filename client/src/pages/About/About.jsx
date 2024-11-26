// src/pages/About/About.js
// import React from "react";
import "./style.css"; // Import custom styles
// import cowImage from "https://via.placeholder.com/300?text=Cow+Farming"; // Update with your image URLs
// import goatImage from "https://via.placeholder.com/250?text=Goat+Farming";
// import vermiImage from "https://via.placeholder.com/200?text=Vermicomposting";

function About() {
  return (
    <section className="about-section bg-white p-6 md:p-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Text Content */}
        <div className="text-content md:w-2/3 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Grow Organic India
          </h1>
          <h2 className="text-3xl font-semibold text-orange-500 mt-4">
            About Company
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Welcome to Grow Organic India Pvt. Ltd., your trusted partner in
            sustainable agriculture and organic living. Established with a vision
            to promote eco-friendly practices and contribute to healthier
            lifestyles, we specialize in goat farming, vermicomposting, and cow
            farming.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            At Grow Organic India Pvt. Ltd., we are committed to generating
            consistent revenue while prioritizing environmental sustainability
            and public health. By producing high-quality organic products, we aim
            to empower communities with healthier choices and a greener future.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Our goat farming practices ensure ethically raised livestock for
            premium-quality dairy and meat products. Our vermicomposting
            operations transform organic waste into nutrient-rich compost,
            supporting soil fertility and sustainable farming.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            We believe in a harmonious balance between nature and agriculture,
            working tirelessly to offer products that are not only good for the
            planet but also vital for your well-being. With Grow Organic India,
            you are choosing a healthier future for yourself and the environment.
          </p>
        </div>

        {/* Right Circular Images */}
        <div className="image-content flex flex-col md:w-1/3 space-y-6">
          <div className="image-wrapper border-orange">
            {/* <img src={cowImage} alt="Cow Farming" className="circle-img" /> */}
          </div>

          <div className="image-wrapper border-green">
            {/* <img src={goatImage} alt="Goat Farming" className="circle-img" /> */}
          </div>

          <div className="image-wrapper border-dark-orange">
            {/* <img src={vermiImage} alt="Vermicomposting" className="circle-img" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
