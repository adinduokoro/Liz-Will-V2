import React from "react";
import styles from "./Quality.module.css";
import { cards } from "./data";

const Quality = () => {
  return (
    <section className={styles.quality}>
      <div className="container">
          <div className={styles.cards}>
            {cards.map((card, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.imageContainer}>
                  <img src={card.image} alt="" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.title}>{card.title}</h3>
                  <p className={`${styles.description} text-large`}>{card.description}</p>
                </div>
              </div>
            ))}
          </div> 
        </div>
    </section>
  );
};

export default Quality;
