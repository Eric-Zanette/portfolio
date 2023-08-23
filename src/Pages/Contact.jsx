import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="contactPage">
        <h1 className="pageHeader">Contact Information</h1>

        <div className="contacts">
          {" "}
          <h2>
            Email: <span>ericzanette@gmail.com</span>
          </h2>
          <h2>
            Phone Number: <span>613-501-1203</span>
          </h2>
        </div>
        <div className="sites">
          <img src="/img/github.png" alt="" />
          <img src="/img/linkedin.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
