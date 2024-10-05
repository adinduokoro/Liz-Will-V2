import React from "react";
import styles from "./ParagraphCard.module.css";

const paragraphCard = ({ heading, subHeading, content, image }) => {
  return (
    <div className={styles.paragraphContent}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{heading}</h2>
        {subHeading ? (
          <p className={`${styles.subHeading} text-large`}>{subHeading}</p>
        ) : null}
      </div>
      <div className={styles.paragraph}>
        <div className={styles.imageContainer}>{image}</div>
        {content}
      </div>
    </div>
  );
};

export default paragraphCard;
