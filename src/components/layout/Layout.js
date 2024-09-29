import React from "react";
import styles from "./Layout.module.css";
import { Navigation, Footer } from "../../components";
import { Outlet, useLocation } from "react-router-dom";
import { HeroBg, PageBg } from "../../assets/backgrounds";
import video from "../../assets/hero-video.mp4";

const Layout = () => {
  const location = useLocation();

  const renderBackground = () => {
    switch (location.pathname) {
      case "/":
        return <HeroBg video={video} />;
      case "contact":
        return <PageBg image={""} />
      default:
        return null
    }
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
