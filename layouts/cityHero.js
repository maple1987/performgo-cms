import React from 'react'

export default ({ region, city, event }) => (
  <div id="content" className="content-main">
    <div className="section section--light-text section--contentmiddle section--swap-columns section--bg section--bgcover section--masthead" style={{ backgroundImage: 'url(https://dt-cdn.net/images/perform-go-background-2-2500-9e22a91a05.jpg)' }}>
      <div className="column column--1-of-2">
        <img src="https://dt-cdn.net/images/perform-go-logo-424-5b69c3d85b.png" style={{ maxWidth: '200px' }} srcSet="https://dt-cdn.net/images/perform-go-logo-200-5b69c3d85b.png 200w, https://dt-cdn.net/images/perform-go-logo-400-5b69c3d85b.png 400w, https://dt-cdn.net/images/perform-go-logo-424-5b69c3d85b.png 424w" width="424px" sizes="((min-width: 992px) and (not (media: print))) 50vw, 100vw" />
        <div className="perform_header--xlarge perform--bold-500 perform--color-gradient">{city.name}</div>
        <div className="perform--bold-300 perform--align-left perform_header--medium perform--color-gradient">{event.address}<br />{event.date}</div>
        <p className="placeholder--fixed"></p>
        <div className="perform-countdown">
          <span className="perform-countdown__time countdown" id="countdown-to-perform" style={{ color: '#fff' }} data-targettime="15 August 2019 09:00:00 UTC+10"></span>
        </div>
  
      </div><div className="column column--1-of-2">
        <div className="video js-video">
          <a href={region.video} className="video--vidyard">
            <img className="video__element" src={`${region.video}.jpg`} alt="Video player" />
            <div className="play-button"></div>
          </a>
        </div>
  
      </div>
    </div>
  </div>
)