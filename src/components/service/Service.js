import React from "react";
import styles from "./Service.module.css";
import { services } from "./data";

const Service = () => {
  return (
    <section className={styles.service}>
      <div className="container">
        <div className={styles.serviceContent}>
          <h2>Explore Our Key Services and More</h2>
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
              <button className="button-text primary-button">
                More Services
              </button>
            </div>
            <div className={styles.cards}>
              {services.map((index, service) => (
                <div className={styles.card} key={index}>
                  <div className={styles.imageContainer}>
                    <img src="" alt="" />
                  </div>
                  <div className={styles.headerContainer}>
                    <h3>{}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
