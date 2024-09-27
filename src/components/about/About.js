import React from "react";
import styles from "./About.module.css";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

const About = () => {
  const navButtons = ["History", "Description", "Mission"];
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          <h2 className={styles.title}>About Our Design Philosophy</h2>
          <div className={styles.aboutInfo}>
            <nav className={styles.navLinks}>
              {navButtons.map((label, index) => (
                <button key={index} className={styles.navButton}>
                  {label}
                </button>
              ))}
            </nav>
            <article className={styles.textContent}>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vesti bcursus ante dapibus diam. u. Duis sagm
                dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
                quis sem.
              </p>
              <a href="#" className={styles.learnMore}>
                Learn More
              </a>
            </article>
            <div className={styles.slideshow}>
              <div
                className={styles.preview}
                role="img"
                aria-label="Design preview"
              ></div>
              <div className={styles.slideButtons}>
                <img
                  src={leftArrow}
                  alt="left-arrow"
                  className={styles.slideIcon}
                />
                <img
                  src={rightArrow}
                  alt="right-arrow"
                  className={styles.slideIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
