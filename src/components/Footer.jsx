import React from 'react';
import { FaFacebook , FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>
              Springdale Public School is committed to providing quality education and fostering the development of every student.
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li>123 Education Lane, Cityville, State, ZIP Code</li>
              <li>+1 (123) 456-7890</li>
              <li><a href="mailto:info@springdale.edu" className="text-blue-300">info@springdale.edu</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-600" aria-label="Facebook">
                <FaFacebook/>
              </a>
              <a href="https://twitter.com" className="text-blue-400" aria-label="Twitter">
                <FaTwitter/>
              </a>
              <a href="https://instagram.com" className="text-pink-600" aria-label="Instagram">
               <FaInstagram/>
              </a>
              <a href="https://linkedin.com" className="text-blue-700" aria-label="LinkedIn">
                <FaLinkedin/>
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email Address"
                className="p-2 mb-2 rounded border border-gray-600"
              />
              <button type="submit" className="bg-blue-500 p-2 rounded text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Springdale Public School(Aditya). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
