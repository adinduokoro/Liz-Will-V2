import React from "react";
import styles from "./Header.module.css";

const Header = ({ name }) => {
  return (
    <div className={styles.header}>
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
