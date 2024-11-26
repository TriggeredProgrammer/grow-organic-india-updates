// import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons from react-icons
import "./style.css"; // Importing custom CSS

export default function Footer() {
  return (
    <footer className="footer-container bg-gray-800 text-white py-6 px-4">
      <div className="footer-content max-w-screen-xl mx-auto flex flex-wrap justify-between gap-8">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 transform rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          <span className="font-bold text-xl">Grow Organic India</span>
        </a>

        {/* Navigation Links Section */}
        <div className="footer-links">
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-orange-500">About Us</a>
            </li>
            <li>
              <a href="/products" className="hover:text-orange-500">Our Products</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-500">Contact</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-orange-500">Blog</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons Section */}
        <div className="footer-social flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:text-blue-600"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Contact Information Section */}
        <div className="footer-contact space-y-2">
          <p>Contact us at:</p>
          <p>+1 800-123-4567</p>
          <p>info@groworganicindia.com</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom text-center text-sm py-4 mt-8 border-t border-gray-600">
        <p>&copy; 2024 Grow Organic India. All rights reserved.</p>
      </div>
    </footer>
  );
}
