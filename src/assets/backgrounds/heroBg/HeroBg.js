import React from 'react'
import styles from "./HeroBg.module.css"

const HeroBg = () => {
  return (
    <div className={styles.heroBg}>
      <div className={styles.frame}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh"  fill="none">
  <path d="M0 0H1440V350V525L725.5 700H0V0Z" fill="#933636" fill-opacity="0.5"/>
</svg>
      </div>
    </div>
  )
}

export default HeroBg