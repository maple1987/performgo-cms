import React, { Component } from 'react'
import Head from './head'

export default class Nav extends Component {
  render() {
    const { city, region, event = {} } = this.props
    const allowRegistration = event.allow_registration
    return (
      <nav id="nav" className="nav" ref={el => (this.dom = el)}>
        <Head region={region} city={city} />
        <a className="nav__brand nav__brand--hideNav" href="/">
          <img className="nav__logo nav__logo--white" src="https://dt-cdn.net/images/dynatrace-logo-rgb-cnh-800x142px-8ad53ac283.svg" alt="Software Intelligence for the Enterprise Cloud" sizes="((min-width: 992px) and (not (media: print))) 50vw, 100vw" />
          <img className="nav__logo nav__logo--black" src="https://dt-cdn.net/images/dynatrace-logo-rgb-cph-800x142px-ac1b21b785.svg" alt="Software Intelligence for the Enterprise Cloud" sizes="((min-width: 992px) and (not (media: print))) 50vw, 100vw" />
        </a>
        <ul className="nav__list nav__list--primary nav__list--primary--hideNav">
          <li className="nav__item nav__item--right nav__item--other">
            {allowRegistration ? <a className="btn btn--navbar" href="#registration">Register now</a> : null }
          </li>
        </ul>
      </nav>
    )
  }

}
