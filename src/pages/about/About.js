import React from 'react'
import styles from "./About.module.css"
import { AboutSection, Header } from '../../components'

const About = () => {
  return (
    <div className={styles.about}>
        <Header name={"About"}/>
        <AboutSection />
    </div>
  )
}

export default About