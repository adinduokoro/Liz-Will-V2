import React from "react";
import styles from "./Navigation.module.css";
import { navItems } from "./data";
import logo from "../../assets/logo-light.svg";
import menuIcon from "../../assets/menuIcon.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link to="/">
            <div className={styles.logoContainer}>
              <img
                loading="lazy"
                src={logo}
                className={styles.logo}
                alt="Company logo"
              />
            </div>
          </Link>
          <nav className={styles.navLinks}>
            {navItems.map((item, index) => (
              <Link key={index} to={item.href} className="button-text">
                {item.text}
              </Link>
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
