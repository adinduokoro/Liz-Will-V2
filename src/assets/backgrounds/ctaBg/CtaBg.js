import React from 'react'
import styles from "./CtaBg.module.css"

const CtaBg = ({img}) => {
  return (
    <div className={styles.ctaBg}>
      <div className={styles.overlay}></div>
      <img src={img} alt="" />
    </div>
  )
}

export default CtaBg