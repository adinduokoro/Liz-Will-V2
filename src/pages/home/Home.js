import React from "react";
import styles from "./Home.module.css";

import {
  About,
  CtaOne,
  CtaTwo,
  Featured,
  Hero,
  Quality,
  Service,
  Strap,
} from "../../components";
import { CtaBg } from "../../assets/backgrounds";
import background from "../../assets/cta-bg.jpg";

const Home = () => {
  return (
    <div>
      <Hero />
      <Strap />
      <About />
      <div className={styles.qualityAndService}>
          <Quality />
          <Service />
      </div>
      <Featured />
      <div className={styles.cta}>
        <div className={styles.ctaBg}>
          <CtaBg img={background} />
        </div>
        <CtaOne />
        <CtaTwo />
      </div>
    </div>
  );
};

export default Home;
