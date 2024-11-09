import React from "react";
import styles from "./PortfolioSection.module.css";

const PortfolioSection = () => {
  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        <div className={styles.portfolioSectionContent}>
          <div className={styles.header}>
            <h2>Portfolio</h2>
            <p>
              Each project showcases our dedication to quality and precise
              attention to detail.
            </p>
          </div>
          <div className={styles.portfolio}>
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
            <div className={styles.item3}></div>
            <div className={styles.item4}></div>
            <div className={styles.item5}></div>
            <div className={styles.item6}></div>
            <div className={styles.item7}></div>
            <div className={styles.item8}></div>
            <div className={styles.item9}></div>
            <div className={styles.item10}></div>
            <div className={styles.item11}></div>
            <div className={styles.item12}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
