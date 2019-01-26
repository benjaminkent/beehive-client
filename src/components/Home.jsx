import React, { Component } from 'react'

import Header from './subcomponents/Header'
import Hero from './subcomponents/Hero'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
      </>
    )
  }
}

export default Home
