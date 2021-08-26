import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400');\n",
        }}
      />

      <ul>
        <li>
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true" />
            <span> - Facebook</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true" />
            <span> - Twitter</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-google-plus" aria-hidden="true" />
            <span> - Google</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true" />
            <span> - Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
