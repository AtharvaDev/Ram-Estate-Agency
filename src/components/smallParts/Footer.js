import React from "react";
import logo from "../../img/logo1-Rbg.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__one flex justify-between pl-5 pr-5">
        <img src={logo} height="" width="200px" alt="" />
        <h2>
          © Copyright 2021 - RAM ESTATE AGENCY. All Rights Reserved. DESIGNED BY{" "}
          <a href="https://www.linkedin.com/in/atharvadev/">
            <b>ATHARVA DESHMUKH</b>{" "}
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Footer;
