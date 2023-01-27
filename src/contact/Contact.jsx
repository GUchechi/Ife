import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_title">Be among the first to experience ifẹ</div>
      <div className="contact_subTitle">
        We’ll keep you updated when the product launches
      </div>
      <div className="contact_form">
        <form>
          <input className="formData" type="text" placeholder="name" />
          <input className="formData" type="email" placeholder="email" />
          <button className="formBtn">Get Early Access</button>
        </form>
      </div>
    </div> 
  );
};

export default Contact;
