import React from "react";
import styles from "./ContactSection.module.css";
import { ContactForm } from "../../components";

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactContent}>
          <h2>
            Liz Will <br />
            Design and Renovation
          </h2>
          <div className={styles.contactInfo}>
            <div className={styles.left}>
              <p className="text-large">
                Start your project today <br />
                by calling or emailing us.
              </p>
              <div className={styles.cta}>
                <h2>
                  Let's Talk <br />
                  Get in Touch
                </h2>

                <p>
                  PO Box 123 <br />
                  Baltimore, MD 21236
                </p>
                <div className={styles.businessDetails}>
                  <p>MHIC 01-157071</p>
                  <p>443-218-3344</p>
                  <p>lizwilldesign@gmail.com</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <p className="text-large">Or submit your information here:</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
