import React from 'react'
import styles from "./CtaTwo.module.css"
import { Link } from 'react-router-dom'

const CtaTwo = () => {
  return (
    <section className={styles.ctaTwo}>
      <div className="container">
        <div className={styles.ctaTwoContent}>
          <div className={styles.header}>
            <h1>Thinking about a new project?</h1>
            <p>Feel free to say hello....</p>
          </div>
          <Link to="contact">
          <button className='button-text primary-button'>Let's talk</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaTwo