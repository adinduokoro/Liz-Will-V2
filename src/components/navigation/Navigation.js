import React from "react";
import styles from "./Navigation.module.css";
import { navItems } from "./data";
import logo from "../../assets/logo-light.svg";
import menuIcon from "../../assets/menuIcon.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen, SET_MENU_TOGGLE } from "../../redux/slice/menuSlice";

const Navigation = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(selectIsMenuOpen)

  const toggleMenu = () => {
    dispatch(SET_MENU_TOGGLE(!isMenuOpen))
  };


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
          <button className={`${styles.menuIconContainer} ${isMenuOpen ? styles.hide : ""}`} aria-label="Toggle menu">
            <img
              loading="lazy"
              src={menuIcon}
              className={styles.menuIcon}
              onClick={toggleMenu}
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
