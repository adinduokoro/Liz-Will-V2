import React from 'react'
import styles from "./Layout.module.css";
import {Navigation, Footer} from "../../components"
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout