import React from "react";
import styles from "./Layout.module.css";
import { Navigation, Footer } from "../../components";
import { Outlet } from "react-router-dom";
import { HeroBg } from "../../assets/backgrounds";

const Layout = () => {
  const renderBackground = () => {
    return <HeroBg video={""} />;
  };

  return (
    <div className={styles.layout}>
      <div className={styles.background}>{renderBackground()}</div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
