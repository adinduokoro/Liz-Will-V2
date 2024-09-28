import React from "react";
import styles from "./Home.module.css"

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

const Home = () => {
  return (
    <div>
      <Hero />
      <Strap />
      <About />
      <Quality />
      <Service />
      <Featured />
      <div className={styles.ctaBg}>
      <CtaOne />
      <CtaTwo />
      </div>
    </div>
  );
};

export default Home;
