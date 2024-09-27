import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo-light.svg";
import { socialIcons } from "./data";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.top}>
            <div className={styles.companyDetails}>
              <img src={logo} alt="" />
              <div className={styles.address}>
                <p>PO Box 123,</p>
                <p>Baltimore, MD 21236</p>
              </div>
              <div className={styles.companyContact}>
                <p>MHIC 01-157071</p>
                <p>+1 (443) 218-3344</p>
                <p>lizwilldesign@gmail.com</p>
              </div>
            </div>
            <div className={styles.form}>
              <p>Let’s ger started! Complete the following form:</p>
              <form className={styles.formContainer} action="">
                <div className={styles.inputField}>
                  <div className={styles.inputColumn}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                  </div>
                  <textarea placeholder="How can we help you?"></textarea>
                </div>
                <button className="button-text">Submit</button>
              </form>
            </div>
          </div>
          <div className={styles.bottom}>
            <p className="copyright">
              © 2024 Lizz Will Design & Renovation. All rights reserved. Created
              by
              <span style={{ fontStyle: "italic", cursor: "pointer" }}>
                {" "}
                Byte Back Digital
              </span>
            </p>
            <div className={styles.socialLinks}>
              {socialIcons.map((icon, index) => (
                <div className={styles.link} key={index}>
                  <img src={icon.img} alt={icon.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>

    // <footer className={styles.footer}>
    //   <div className={styles.container}>
    //   <div className={styles.footerWrapper}>
    //     <>
    //       <div className={styles.contactInfo}>
    //         <div className={styles.logo}>
    //           <img loading="lazy" src={logo} alt="Company Logo" />
    //         </div>
    //         <div className={styles.infoContainer}>
    //           <div className={styles.address}>
    //             <p>PO Box 123,</p>
    //             <p className={styles.cityState}>Baltimore, MD 21236</p>
    //           </div>
    //           <div className={styles.additionalInfo}>
    //             <p>MHIC 01-157071</p>
    //             <p className={styles.phone}>1+ (443) 218-3344</p>
    //             <p className={styles.email}>lizwilldesign@gmail.com</p>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //     <>
    //       <div className={styles.formContainer}>
    //         <p className={styles.formTitle}>
    //           Let's get started! Complete the following form:
    //         </p>
    //         <form className={styles.form}>
    //           <div className={styles.inputGroup}>
    //             <div className={styles.inputWrapper}>
    //               <input
    //                 id="name"
    //                 type="text"
    //                 className={styles.input}
    //                 placeholder="Name"
    //                 aria-label="Name"
    //               />
    //               <input
    //                 id="email"
    //                 type="email"
    //                 className={styles.input}
    //                 placeholder="Email"
    //                 aria-label="Email"
    //               />
    //             </div>
    //             <div className={styles.inputWrapper}>
    //               <textarea
    //                 id="message"
    //                 className={styles.textarea}
    //                 placeholder="How can we help you?"
    //                 aria-label="How can we help you?"
    //               ></textarea>
    //             </div>
    //           </div>
    //           <button
    //             type="submit"
    //             className={`${styles.submitButton} secondary-button`}
    //           >
    //             Submit
    //           </button>
    //         </form>
    //       </div>
    //     </>
    //   </div>
    //   <>
    //     <div className={styles.footerBottom}>
    //       <p className={styles.copyright}>
    //         © 2024 Lizz Will Design & Renovation. All rights reserved. Created
    //         by <span style={{ fontStyle: "italic" }}>Byte Back Digital</span>
    //       </p>
    //       <div className={styles.socialIcons}>
    //         {socialIcons.map((icon, index) => (
    //           <img
    //             key={index}
    //             loading="lazy"
    //             src={icon.src}
    //             alt={icon.alt}
    //             className={styles.icon}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </>
    //   </div>
    // </footer>
  );
};

export default Footer;
