import React from "react";
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
      <CtaOne />
      <CtaTwo />
    </div>
  );
};

export default Home;
