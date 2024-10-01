import React from 'react'
import styles from "./Contact.module.css"
import { ContactSection, Header } from '../../components'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Header name="Contact"/>
      <ContactSection />
    </div>
  )
}

export default Contact