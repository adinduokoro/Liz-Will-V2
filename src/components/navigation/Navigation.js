import React from "react";
import styles from "./Navigation.module.css";
import { navItems } from "./data";
import logo from "../../assets/logo-light.svg";
import menuIcon from "../../assets/menuIcon.svg";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.logoContainer}>
            <img
              loading="lazy"
              src={logo}
              className={styles.logo}
              alt="Company logo"
            />
          </div>
          <nav className={styles.navLinks}>
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="button-text">
                {item.text}
              </a>
            ))}
          </nav>
          <button className={styles.menuIconContainer} aria-label="Toggle menu">
            <img
              loading="lazy"
              src={menuIcon}
              className={styles.menuIcon}
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
