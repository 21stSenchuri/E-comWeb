import React from "react";
import Layout from "./../components/layout/layout";

const About = () => {
  return (
    <Layout title ={"About-Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At Crafty Corner, we believe in the power of creativity and tradition. Our journey began with a deep passion for handcrafted arts, inspired by the rich cultural heritage of artisans around the world. We aim to provide artists, crafters, and creators with the finest materials to bring their unique visions to life.

Our curated collection includes locally sourced, eco-friendly, and ethically made supplies that reflect the skill and dedication of artisans. Each item in our store tells a story of craftsmanship, sustainability, and artistic expression. Whether you are a professional artist or a hobbyist, we are here to support your creative journey with high-quality products and personalized customer service.

By connecting artisans and customers, we are fostering a global community that values craftsmanship, creativity, and the beauty of handmade work. We invite you to be part of our mission to support the art of making, one craft at a time.
          </p>
        </div>
      </div>
    </Layout>
  );
};
Layout.defaultProps={
  title:"CC",
  description:"mern stack project",
  keywords:"mern,react, node,mongodb",
  author:"'Craftycorner"}
  
export default About;