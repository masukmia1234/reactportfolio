import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div>
      <h6 className="py-2 text-center footer-style">FUll stack Web application &nbsp; and  Wordpress Developer</h6>
      <div className="py-2 text-center footer-style">©  Design By Masuk Mia &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default FooterPanel;
