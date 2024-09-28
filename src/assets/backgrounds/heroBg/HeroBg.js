import React from "react";
import styles from "./HeroBg.module.css";

const HeroBg = ({ video }) => {
  return (
    <div className={styles.heroBg}>
      <div className={styles.overlay}></div>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroBg;
