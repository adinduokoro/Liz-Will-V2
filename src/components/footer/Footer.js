import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo-light.svg";
import { socialIcons } from "./data";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const location = useLocation();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {location.pathname !== "/contact" && (
            <div className={styles.top}>
              <div className={styles.companyDetails}>
                <img src={logo} alt="" />
                <div className={styles.address}>
                  <p>PO Box 123,</p>
                  <p>Baltimore, MD 21236</p>
                </div>
                <div className={styles.companyContact}>
                  <p>MHIC 01-157071</p>
                  <p>+1 (443) 218-3344</p>
                  <p>lizwilldesign@gmail.com</p>
                </div>
              </div>
              <div className={styles.form}>
                <p>Let’s ger started! Complete the following form:</p>
                <form className={styles.formContainer} action="">
                  <div className={styles.inputField}>
                    <div className={styles.inputColumn}>
                      <input type="text" placeholder="Name" />
                      <input type="text" placeholder="Email" />
                    </div>
                    <textarea placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="button-text">Submit</button>
                </form>
              </div>
            </div>
          )}
          <div className={styles.bottom}>
            <p className="copyright">
              © {year} Lizz Will Design & Renovation. All rights reserved.
              Created by
              <span style={{ fontStyle: "italic", cursor: "pointer" }}>
                {" "}
                Byte Back Digital
              </span>
            </p>
            <div className={styles.socialLinks}>
              {socialIcons.map((icon, index) => (
                <div className={styles.link} key={index}>
                  <img src={icon.img} alt={icon.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
