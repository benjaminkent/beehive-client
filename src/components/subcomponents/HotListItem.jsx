import React, { Component } from 'react'

class HotListItem extends Component {
  render() {
    return (
      <div className="list-item">
        <p className="list-name">{this.props.name}</p>
        <img
          src={this.props.image}
          alt={this.props.name}
          className="list-image"
        />
      </div>
    )
  }
}

export default HotListItem
