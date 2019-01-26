import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  state = {
    class: 'hide'
  }

  _openMenu = () => {
    this.setState({
      class: 'open'
    })
  }

  _hideMenu = () => {
    this.setState({
      class: 'hide'
    })
  }

  render() {
    return (
      <>
        <header className="header">
          <nav className="big-nav">
            <li>
              <NavLink onClick={this._hideMenu} to="/">
                <img className="logo" src="./images/bee-logo.png" alt="logo" />
              </NavLink>
            </li>
            <div className="big-header-links">
              <li onClick={this._hideMenu} className="big-header">
                <NavLink className="link" title="Take Me Home!" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="big-header">
                <NavLink
                  className="link"
                  title="Check out my Portfolio"
                  to="/portfolio"
                >
                  About
                </NavLink>
              </li>
              <li className="big-header">
                <NavLink className="link" title="View my Resume" to="/resume">
                  Meet the squad
                </NavLink>
              </li>
            </div>
            <li onClick={this._openMenu} className="hamburger">
              <div />
              <div />
              <div />
            </li>
          </nav>
        </header>
        <section className={`${this.state.class} menu`}>
          <p onClick={this._hideMenu} className="menu-x">
            X
          </p>
          <nav>
            <ul className="pop-out-items">
              <NavLink onClick={this._hideMenu} className="link" exact to="/">
                <li>Home</li>
              </NavLink>
              <NavLink
                onClick={this._hideMenu}
                className="link"
                to="/portfolio"
              >
                <li>About</li>
              </NavLink>
              <NavLink onClick={this._hideMenu} className="link" to="/resume">
                <li>Meet the squad</li>
              </NavLink>
            </ul>
          </nav>
        </section>
      </>
    )
  }
}

export default Header
