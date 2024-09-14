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
import React from "react";
import Layout from "./../components/layout/layout";
import ContactForm from "../styles/ContactForm.css";
import '@fortawesome/fontawesome-free/css/all.min.css';




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
          <form className="contact-form">
            <div>
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
              
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-control" rows="4" placeholder="Enter your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <div className="social-media">
              <h3>Follow Us</h3>
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="x">
                <i className="fab fa-x"></i>
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
               </a>
               <a href="https://wa.me/+977-9806973596" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
    <i className="fab fa-whatsapp"></i>
</a>

            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;








         