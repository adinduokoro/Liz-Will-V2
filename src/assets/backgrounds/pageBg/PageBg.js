import React from 'react'
import styles from "./PageBg.module.css"

const PageBg = ({image}) => {
  return (
    <div className={styles.pageBg}>
      <div className={styles.overlay}>hello</div>
      <div className={styles.imageContainer}>
        <img src={image} alt='' />
      </div>
    </div>
  )
}

export default PageBg