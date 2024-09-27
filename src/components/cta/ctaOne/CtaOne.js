import React from "react";
import styles from "./CtaOne.module.css";

const CtaOne = () => {
  return (
    <section className={styles.ctaOne}>
      <div className="container">
        <div className={styles.ctaOneContent}>
          <h1>Get in Touch</h1>
          <p className="text-large">Remodeling & Design, Tailored to Your Vision</p>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
