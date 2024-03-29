import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section>
      <div className="container">
        <div className="contact-top">
          <div className="contact-top-left">
            <h1>Have a question ? Let’s get in touch with us.</h1>
            <p>Fill up the Form and ou team will get back to within 24 hrs</p>
          </div>
          <div className="contact-top-right">
            <ul className="contact-list">
              <li className="contact-item-1">Location</li>
              <li className="contact-item">
                DLF Cybercity, Bhubaneswar, India, &52050
              </li>
            </ul>
            <ul className="contact-list">
              <li className="contact-item-1">Contact Us</li>
              <li className="contact-item">020 7993 2905</li>
              <li className="contact-item">hi@finsweet.com</li>
            </ul>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-bottom-left">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email address" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type message"
            ></textarea>
            <button className="btn-1">Submit</button>
          </div>
          <div className="contact-bottom-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.073069253105!2d69.20123767587322!3d41.285514171313025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1711738256609!5m2!1sen!2s"
              width="600"
              height="450"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
