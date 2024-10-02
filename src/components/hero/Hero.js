import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1>
            Designing homes <br />
            to perfectly match your <span>Imagination</span>
          </h1>
          <p className="text-large">
            General Contracting, Handyman Service, Painting & Drywall, Kitchen &
            Bath Renovations, and So Much More
          </p>
          <div className={styles.heroButton}>
            <Link to="contact">
            <button className="button-text primary-button">Get A Quote</button>
            </Link>
            <Link to="services">
              <span className="button-text">See Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
