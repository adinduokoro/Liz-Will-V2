import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.heroContent}>
          <h1>Designing homes to perfectly match your Imagination</h1>
          <p className='text-large'>General Contracting, Handyman Service, Painting & Drywall, Kitchen & Bath Renovations, and So Much More</p>
          <div className={styles.heroButton}>
            <button className='button-text primary-button'>Get A Quote</button>
            <span className='button-text'>See Services</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero