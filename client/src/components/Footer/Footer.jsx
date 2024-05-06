import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <span className="secondaryText">
            Our vision is to give everyone <br />
            the best healthy dish to cook<br/>
            while they are hungry.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Copyright</span>
          <span className="secondaryText">@TriCoders</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
