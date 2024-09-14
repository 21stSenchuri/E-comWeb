/*import React from "react";
import Layout from "./../components/layout/layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        {/* First Column: Form }
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <form>
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        {/* Second Column: Links and Map }
        <div className="col-md-6">
          <h2>Reach Us</h2>
          <ul>
            <li>Email: info@craftycorner.com</li>
            <li>Phone: +977 123456789</li>
            <li>Support: 24/7</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.288865878096!2d83.45758568058667!3d27.7128265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687916d5543cd%3A0x3b8178e4c66f202a!2sButwal%20Golpark%20butwal!5e0!3m2!1sen!2snp!4v1726246090781!5m2!1sen!2snp"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;mport React from "react";
import Layout from "./../components/layout/layout";
//import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="contactus">
        <div className="row">
          {/* Map Container }
          <div className="map-container col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.288865878096!2d83.45758568058667!3d27.7128265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687916d5543cd%3A0x3b8178e4c66f202a!2sButwal%20Golpark%20butwal!5e0!3m2!1sen!2snp!4v1726246090781!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Content Container: Form and Links }
          <div className="content-container col-md-6">
            <div className="contact-form">
              <h2>Contact Us</h2>
              <form>
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

            <div className="contact-links">
              <h2>Reach Us</h2>
              <ul>
                <li>Email: info@craftycorner.com</li>
                <li>Phone: +977 123456789</li>
                <li>Support: 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;*/
import React, { useState } from "react";
import Layout from "./../components/layout/layout";
import ContactForm from "../styles/ContactForm.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="contact-page">
        {/* Map Section */}
        <div className="map-container">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.288865878096!2d83.45758568058667!3d27.7128265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687916d5543cd%3A0x3b8178e4c66f202a!2sButwal%20Golpark%20butwal!5e0!3m2!1sen!2snp!4v1726246090781!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <ContactFormComponent />
        </div>
      </div>
    </Layout>
  );
};

const ContactFormComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2ch923s", // Replace with your service ID
        "template_eau6vhy", // Replace with your template ID
        {
          email: formData.email,
          message: formData.message,
        },
        "rUoUUSmnWo3nadVtB" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          className="form-control"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message here..."
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Contact;
