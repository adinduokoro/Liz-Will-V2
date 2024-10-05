import React, { useEffect, useRef } from 'react'
import styles from "./CtaTwo.module.css"
import { Link } from 'react-router-dom'
import Typed from 'typed.js'

const CtaTwo = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello...", "Hola...", "Nǐ hǎo...", "Bonjour..."],
      typeSpeed: 200,
      backSpeed: 75,
      backDelay: 2700,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [])

  return (
    <section className={styles.ctaTwo}>
      <div className="container">
        <div className={styles.ctaTwoContent}>
          <div className={styles.header}>
            <h1>Thinking about a new project?</h1>
            <p>Feel free to say <span ref={el}></span></p>
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