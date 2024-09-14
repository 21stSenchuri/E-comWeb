import React from "react";
import Layout from "./../components/layout/layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><b>Information Collection:</b> We collect personal information such as name, email address, and shipping details to process orders efficiently and provide customer support.</p>
          <p><b>Data Security:</b> Your information is securely stored and protected using industry-standard encryption methods to prevent unauthorized access or data breaches.</p>
          <p><b>Third-Party Disclosure:</b> We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except for trusted third parties who assist us in operating our website and conducting our business.</p>
          <p><b>Consent:</b> By using our website, you consent to our privacy policy. For any concerns or inquiries regarding your personal information, please contact us directly.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;