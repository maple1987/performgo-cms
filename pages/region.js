import React, { Component } from 'react'
import Nav from '../layouts/nav'
import Footer from '../layouts/footer'
import RegionHero from '../layouts/regionHero'
import AngleSection from '../layouts/angleSection'
import LocationsSection from '../layouts/locationsSection'
import regions from '../regions.json'

function findRegionById(id) {
  for (let region of regions) {
    if (region.id === id) {
      return region
    }
  }
}

export default class Region extends Component {
  static getInitialProps({ query = {} }) {
    const region = findRegionById(query.id) || null
    return { region }
  }

  render() {
    const { region } = this.props
    // console.log(region)

    return (
      <div id="top-anchor" className="theme--light nav--light">
        <Nav region={region} />
        <div id="content" className="content-main">
          <RegionHero name={region.name} />
          <AngleSection />
          <div className="section section--even u--padding-bottom-none">
            <p style={{ textAlign: 'center', fontSize: 'calc(24px + 8 * (100vw - 360px) / 1560)', fontWeight: 300, lineHeight: 1.5 }}>
              <span className="perform--color-gradient perform--bold-500">Perform World Tour</span><br />
              <span className="perform--color-gradient">coming soon to a city near you.</span>
            </p>
            <p className="placeholder--fixed"></p>
            <hr className="separator separator--center" />

          </div>
          <LocationsSection region={region} />
        </div>
        <Footer />
      </div>
    )
  }
}
