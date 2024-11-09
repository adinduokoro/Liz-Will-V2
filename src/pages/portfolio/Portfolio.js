import React from 'react'
import styles from "./Portfolio.module.css"
import { Header, PortfolioSection } from '../../components'

const Portfolio = () => {
  return (
    <div>
        <Header name={"Portfolio"}/>
        <PortfolioSection />
    </div>
  )
}

export default Portfolio