import React from "react";
import styles from "./Cta.modules.css";

const Cta = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div className={styles.top}>
            <h1>Get in Touch</h1>
            <p>Remodeling & Design, Tailored to Your Vision</p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.header}>
              <h1>Thinking about a new project?</h1>
              <p>Feel free to say hello....</p>
            </div>
            <button className="button-text primary-button">Let's Talk</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
