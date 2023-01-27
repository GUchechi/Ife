import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact_title">Be among the first to experience ifẹ</h2>
      <p className="contact_subTitle">
        We’ll keep you updated when the product launches
      </p>

      <form action="" className="contact__form">
        <div className="form__controlswrapper">
          <div>
            <input
              required
              name="from_name"
              className="inputName"
              type={"text"}
              placeholder="name"
            />
          </div>
          <div>
            <input
              required
              name="user_email"
              className="inputEmail"
              type={"text"}
              placeholder="email"
            />
          </div>
        </div>
        <button className="formBtn">Get Early Access</button>
      </form>
    </div>
  );
};

export default Contact;
