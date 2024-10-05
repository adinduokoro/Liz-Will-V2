import React from "react";
import styles from "./AboutSection.module.css";
import { ParagraphCard } from "../index";
import { paragraphs } from "./data";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutSectionContent}>
          {paragraphs.map((paragraph, index) => (
            <ParagraphCard
              key={index}
              heading={paragraph.heading}
              subHeading={paragraph.subHeading}
              content={paragraph.content}
              image={paragraph.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
