import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import symbol from "../../assets/symbol.svg";
import { icons, menuSocialIcons } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectIsMenuOpen, SET_MENU_TOGGLE } from "../../redux/slice/menuSlice";
import CloseIcon from "../../assets/close-icon.js";
import logo from "../../assets/logo-light.svg";
import { navItems } from "../navigation/data.js";
import starSymbol from "../../assets/star-symbol.svg";

const Menu = () => {
  const [color, setColor] = useState("var(--primaryColor)");
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);

  const handleResize = () => {
    if (window.innerWidth <= 896) {
      setColor("var(--surfaceColor)");
    } else {
      setColor("var(--primaryColor)");
    }
  };

  const closeMenu = () => {
    dispatch(SET_MENU_TOGGLE(false));
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${styles.menu} ${isMenuOpen ? styles["active"] : ""}`}>
      <div className={styles.closeContainer} onClick={closeMenu}>
        <CloseIcon color={color} />
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menuAbout}>
          <div className={styles.header}>
            <img loading="lazy" src={symbol} alt="" />
            <h3>About Us</h3>
          </div>
          <div className={styles.imageContainer}>image</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link to="services">
            <button className="button-text primary-button" onClick={closeMenu}>
              See Services
            </button>
          </Link>
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
          <Link to="contact">
            <button className="button-text primary-button" onClick={closeMenu}>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.mobileMenuContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} loading="lazy" src={logo} alt="" />
        </div>
        <div className={styles.menuNav}>
          {navItems.map((link, index) => (
            <div className={styles.link} key={index}>
              <Link to={link.href} onClick={closeMenu}>
                <span className="button-text">{link.text}</span>
              </Link>
              <img className="" src={starSymbol} alt="" />
            </div>
          ))}
        </div>
        <div className={styles.newsletter}>
          <h3 className={styles.newsletterTitle}>Join Our Newsletter</h3>
          <p className={styles.newsletterDesc}>
            Stay ahead with the latest updates and exclusive offers{" "}
          </p>
          <form>
            <input type="text" />
            <button>
              <img src="" alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Menu;
