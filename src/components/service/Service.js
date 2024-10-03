import React from "react";
import styles from "./Service.module.css";
import { services } from "./data";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section className={styles.service}>
      <div className="container">
        <div className={styles.serviceContent}>
          <h2>
            Explore Our Key
            <br /> Services and More
          </h2>
          <div className={styles.serviceInfo}>
            <div className={styles.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestiem at nibh elementum imperdiet. Duis sagittis
                ipsum.
              </p>
              <Link to="services">
                <button className="button-text primary-button">
                  More Services
                </button>
              </Link>
            </div>
            <div className={styles.cta}>
              <div className={styles.cards}>
                {services.map((service, index) => (
                  <div className={styles.card} key={index}>
                    <div className={styles.imageContainer}>
                      <img src={service.image} alt="" />
                    </div>
                    <div className={styles.headerContainer}>
                      <h4>{service.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="services">
                <button className="button-text primary-button">
                  More Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
