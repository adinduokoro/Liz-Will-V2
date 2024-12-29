import React from "react";
import styles from "./Layout.module.css";
import { Navigation, Footer, Menu } from "../../components";
import { Outlet, useLocation, useMatch } from "react-router-dom";
import { HeroBg, PageBg } from "../../assets/backgrounds";
import video from "../../assets/hero-video.mp4";
import aboutBg from "../../assets/backgrounds/about-background.jpg";
import servicesBg from "../../assets/backgrounds/services-background.jpg";
import portfolioBg from "../../assets/backgrounds/portfolio-background.jpg";
import blogBg from "../../assets/backgrounds/blog-background.jpg";
import contactBg from "../../assets/backgrounds/contact-background.jpg";


const Layout = () => {
  const location = useLocation();
  const isBlogPost = useMatch("/blog/:id"); // Check if the current route matches "/blog/:id"


  const renderBackground = () => {
    switch (location.pathname) {
      case "/":
        return <HeroBg video={video} />;
      case "/about":
        return <PageBg image={aboutBg} />;
      case "/services":
        return <PageBg image={servicesBg} />;
      case "/portfolio":
        return <PageBg image={portfolioBg} />;
      case "/blog":
        return <PageBg image={blogBg} />;
      case "/contact":
        return <PageBg image={contactBg} />;
      default:
        if (isBlogPost) {
          return <PageBg image={blogBg} />;
        }
        return null;
    }
  };

  return (
    <div className={styles.layout}>
      <Menu />
      <div className={styles.background}>{renderBackground()}</div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
