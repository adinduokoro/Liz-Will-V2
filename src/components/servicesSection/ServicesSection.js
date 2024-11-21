import React from "react";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.servicesSectionContent}>
          <div className={styles.header}>
            <h2>Our Services</h2>
            <div className={styles.headerContent}>
              <p>
                Liz Will Renovation is committed to providing our customers with
                the best in customized solutions. Our company is dedicated to
                professionalism, integrity, and excellence while delivering the
                highest quality of service and knowledge. Here are some of our
                many services:
              </p>
              <button>GET AN ESTIMATE</button>
            </div>
          </div>
          <div className={styles.services}>{/* card */}</div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
