import React from "react";
import styles from "./Feature.module.css";

const Featured = () => {
  return (
    <section className={styles.featured}>
      <div className="container">
        <div className={styles.featuredContent}>
          <h2>Featured Projects</h2>
          <div className={styles.content}>
            <div className={styles.slideshowContainer}>
              <div className={styles.slideshow}>slideshow</div>
              <p className={styles.slideshowDesc}> 
              Our meticulous craftsmanship and keen attention to detail shine through in every project we undertake.
              </p>
            </div>
            <button className='button-text primary-button'>View Our Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
