import React from 'react'

export default ({ name }) => (
  <div className="section section--padding-bottom-for-angle section--height-level-2 section--bg section--bgcover section--masthead" style={{ backgroundImage: 'url(https://dt-cdn.net/images/perform-go-regional-bg-2-2500-e08e0c2bcf.jpg)' }}>
    <div className="section__vertical-centered">
      <div className="column" data-fraction="1">
        <div className="perform--align-center">
          <img src="https://dt-cdn.net/images/perform-go-logo-424-5b69c3d85b.png" style={{ textAlign: 'center', maxWidth:'200px' }} srcSet="https://dt-cdn.net/images/perform-go-logo-200-5b69c3d85b.png 200w, https://dt-cdn.net/images/perform-go-logo-400-5b69c3d85b.png 400w, https://dt-cdn.net/images/perform-go-logo-424-5b69c3d85b.png 424w" width="424px" sizes="((min-width: 992px) and (not (media: print))) 50vw, 100vw" />
        </div>
        <p className="placeholder--fixed"></p>
        <div className="perform_header--xlarge perform--bold-500 perform--color-gradient perform--align-center">{name}</div>
        <p className="placeholder--fixed"></p>
        <div className="perform--bold-300 perform_header--medium perform--color-gradient perform--align-center">Accelerate cloud innovation</div>

      </div>
    </div>
  </div>
)