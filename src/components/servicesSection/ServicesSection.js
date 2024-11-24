import React from "react";
import styles from "./ServicesSection.module.css";
import { cards } from "./data";

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
          <div className={styles.services}>
            {cards.map((card, index) => (
              <div className={styles.card} key={index}>
                <h4>{card.heading}</h4>
                <div className={styles.image}>{card.image}</div>
                <p>{card.paragraph}</p>
              </div>
            ))}
            <div className={styles.ctaCard}>
              <h4>Thinking outside the box</h4>
              <p>
                Share your idea! If we can’t bring it to life, we’ll connect you
                with someone who can.
              </p>
              <hr className={styles.lineBreak} />
              <p>443-218-3344</p>
              <p className={styles.email}>lizwilldesign@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
