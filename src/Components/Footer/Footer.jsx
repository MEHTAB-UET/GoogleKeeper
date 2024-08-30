import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        {" "}
        <p>copyrights ©{currentYear}</p>
      </div>
    </>
  );
};

export default Footer;
