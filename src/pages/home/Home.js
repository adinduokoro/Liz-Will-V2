import React from 'react'
import { About, Cta, Featured, Hero, Quality, Service, Strap } from '../../components'

const Home = () => {
  return (
    <div>
      <Hero />
      <Strap />
      <About />
      <Quality />
      <Service />
      <Featured />
      <Cta />
    </div>
  )
}

export default Home