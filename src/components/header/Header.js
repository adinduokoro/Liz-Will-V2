import React from "react";
import styles from "./Header.module.css";

const Header = ({ name, subHeading }) => {
  return (
    <div className={styles.header}>
      <h1>{name}</h1>
      <h2>{subHeading}</h2>
    </div>
  );
};

export default Header;
