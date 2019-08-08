import React, { Component } from 'react'
import Error from 'next/error'
import Nav from '../layouts/nav'
import Footer from '../layouts/footer'
import Agenda from '../layouts/agenda'
import Speakers from '../layouts/speakers'
import sydney from '../content/sydney.json'
import regions from '../regions.json'
import CityHero from '../layouts/cityHero'

function findCityById(id) {
  for (let region of regions) {
    for (let city of region.cities) {
      if (city.id === id) {
        return { region, city }
      }
    }
  }
  return {}
}

const Page = ({ region, city, data }) => (
  <div id="top-anchor" className="theme--light nav--light">
    <Nav event={data.event} city={city} />
    <CityHero event={data.event} region={region} city={city} />
    <Agenda agendas={data.agendas} />
    <Speakers speakers={data.speakers} />
    <Footer />
  </div>
)

export default class City extends Component {
  static getInitialProps({ query = {} }) {
    const result = findCityById(query.id)
    return result
  }

  render() {
    let { region, city } = this.props
    let data = sydney
    if (!region || !city) {
      return <Error statusCode={404} />
    }
    return <Page data={data} region={region} city={city} />
  }
}

export class CityPreview extends Component {
  render() {
    let data = {}, region = {}, city = {}
    if (process.browser && window.CMS) {
      let entry = this.props.entry.toJS()
      data = entry.data
      let result = findCityById(entry.slug) || null
      if (result) {
        region = result.region
        city = result.city
      }
    }
    return <Page data={data} region={region} city={city} />
  }
}