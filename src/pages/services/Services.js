import React from 'react'
import styles from "./Services.module.css"
import { Header, ServiceSection } from '../../components'

const Services = () => {
  return (
    <div>
        <Header name={"Services"}/>
        <ServiceSection />
    </div>
  )
}

export default Services