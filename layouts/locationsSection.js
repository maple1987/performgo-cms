import React from 'react'

export default ({ region = {} }) => (
  <div className="section u-text-center section--even">
    <p style={{ textAlign: 'center' }}>
      <span className="perform--color-gradient perform_header--medium perform--align-center">Open for registration</span>
    </p>
    <p className="placeholder--fixed"></p>
    <p className="placeholder--fixed"></p>
    <div className="perform-locations locations--max-3cols">
      {region.cities.map(city => {
        return <a key={city.id} href={`/${region.id}/${city.id}/`} className="location__tile">
          <div className="tile__image">
            <img src={city.image} alt="Sydney" className="no--zoom" sizes="400px" width="400px" />
          </div>
          <div className="tile__text">
            <span className="location__name perform--color-gradient perform--bold-500"><b>{city.name}</b></span>
            <span className="location__date">Aug 15th, 2019</span>
          </div>
        </a>
      })}

    </div>
    <p>&nbsp;</p>
  </div>
)