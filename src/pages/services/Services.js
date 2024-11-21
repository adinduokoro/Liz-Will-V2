import React from "react";
import styles from "./Services.module.css";
import { Header, ServicesSection } from "../../components";

const Services = () => {
  return (
    <div className={styles.services}>
      <Header name={"Services"} />
      <ServicesSection />
    </div>
  );
};

export default Services;
