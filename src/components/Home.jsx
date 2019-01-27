import React, { Component } from 'react'

import Header from './subcomponents/Header'
import Hero from './subcomponents/Hero'
import HotList from './subcomponents/HotList'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Hero />
        <HotList />
      </div>
    )
  }
}

export default Home
