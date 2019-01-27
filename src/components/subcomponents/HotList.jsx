import React, { Component } from 'react'

import HotListItem from '../subcomponents/HotListItem'
import listData from '../../json/listData'

class HotList extends Component {
  render() {
    return (
      <>
        <section className="hot-list">
          <h3 className="list-title">HOT BEES</h3>
          <div className="list-container">
            {listData.map(v => {
              return <HotListItem name={v.name} image={v.image} key={v.id} />
            })}
          </div>
        </section>
      </>
    )
  }
}

export default HotList
