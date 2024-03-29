import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo-white.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-all">
          <div className="footer-top">
            <div className="footer-1">
              <img src={logo} alt="" />
              <h1>Bespoke software solutions</h1>
              <div className="footer-1-icons">
                <FaFacebookF />
                <FaYoutube />
                <SiInstagram />
                <FaTwitter />
              </div>
            </div>
            <div className="footer-2">
              <ul className="footer-list">
                <li className="footer-item-1">Company</li>
                <li className="footer-item">About Us</li>
                <li className="footer-item">Careers</li>
                <li className="footer-item">Services</li>
                <li className="footer-item">Blog</li>
              </ul>
              <ul className="footer-list">
                <li className="footer-item-1">Connect</li>
                <li className="footer-item">hi@finsweet.com</li>
                <li className="footer-item">+(123) 456-7890</li>
              </ul>
            </div>
            <div className="footer-3">
              <h1>Join Newsletter</h1>
              <input type="text" placeholder="Type email here" />
              <button className="btn-1">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-left"></div>
      <div className="footer-right"></div>
    </footer>
  );
}

export default Footer;
