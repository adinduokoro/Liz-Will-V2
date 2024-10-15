import React from "react";
import styles from "./Menu.module.css";
import symbol from "../../assets/symbol.svg";
import closeIcon from "../../assets/close-icon.svg";
import { icons, menuSocialIcons } from "./data";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.closeContainer}>
        <img src={closeIcon} alt="" />
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menuAbout}>
          <div className={styles.header}>
            <img src={symbol} alt="" />
            <h3>About Us</h3>
          </div>
          <div className={styles.imageContainer}>image</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="button-text primary-button">See Services</button>
        </div>
        <div className={styles.menuContact}>
          <div className={styles.header}>
            <img src={symbol} alt="" />
            <h3>Contact Info</h3>
          </div>
          <div className={styles.contactInfo}>
            {icons.map((icon, index) => (
              <div className={styles.contactDetail} key={index}>
                <div className={styles.symbolContainer}>
                  <img src={icon.icon} alt="" />
                </div>
                {icon.details}
              </div>
            ))}
          </div>
          <div className={styles.socialMedia}>
            {menuSocialIcons.map((icon, index) => (
              <div className={styles.iconContainer} key={index}>
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.menuCta}>
          <div className={styles.imageContainer}>image</div>
          <h3>Do You Need Any Help?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
            Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is and typesetting
            industry the printing .
          </p>
          <button className="button-text primary-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
