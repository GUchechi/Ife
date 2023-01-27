import React from "react";
import "./Gift.css";
import Vector from "../Assets/Vector.png";
import { FiGift } from "react-icons/fi";
import { FaDrum } from "react-icons/fa";

const Gift = () => {
  return (
    <div className="gift">
      <div className="send">
        <div className="imgIcon">
          <img
            src={Vector}
            width="50px"
            height="35px"
            alt="gift Icon"
            className="icon"
            style={{ marginTop: "1rem" }}
          />
        </div>
        <p className="giftText" style={{ width: "70%" }}>
          Send and receive gifts from anyone, anywhere
        </p>
      </div>
      <div className="send">
        <div className="imgIcon">
          <FiGift size={50} className="icon" style={{ color: "#920F0F" }} />
        </div>
        <p className="giftText">Redeem gifts in cash or kind</p>
      </div>
      <div className="send">
        <div className="imgIcon">
          <FaDrum size={50} style={{ color: "#920F0F" }} />
        </div>
        <p className="giftText">Earn money by staking İFẸ tokens</p>
      </div>
    </div>
  );
};

export default Gift;
