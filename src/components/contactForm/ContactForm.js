import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={styles.contactForm} action="">
      <div className={styles.inputFields}>
        <div className={styles.rowOne}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className={styles.rowTwo}>
          <input type="text" name="number" placeholder="Phone Number" />
          <input type="text" name="service" placeholder="Service (Pick One)" />
        </div>
      </div>
      <textarea
        name="response"
        id=""
        placeholder="How can we help you?"
      ></textarea>
      <button className="button-text">SUBMIT</button>
    </form>
  );
};

export default ContactForm;
