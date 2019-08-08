import React from 'react'

export default () => (
  <div className="section section--padding-top-none section--even">
    <div className="column column--1-of-2">
      <p style={{ textAlign: 'left', fontSize: 'calc(24px + 8 * (100vw - 360px) / 1560)', fontWeight: 300, lineHeight: 1.5 }}>
        <span className="perform--bold-500 perform--color-gradient">Transform into the digital future at light speed!</span>
      </p>
      <hr className="separator separator--left" /><p>Learn, network, and be inspired.</p>
      <p>For one day only, we are bringing together technical experts, industry leaders, and some of Australia and New Zealand's biggest brands to Sydney for our cloud innovation conference, Perform<em>Go!</em> Sydney.</p>
      <p>Perform<em>Go!</em> Sydney will be the one place attracting industry leaders and seasoned technologists to connect, learn how to accelerate innovation at scale, transform the way they work and succeed in an increasingly complex software universe.</p>
      <p>Join us for a fully packed day where attendees will benefit from the most relevant technical and business content on software intelligence, enterprise cloud transformation, AIOps, BizDevOps, Autonomous Cloud and digital experience.</p>

    </div><div className="column column--1-of-2">
      <div className="tile tile--mq perform-go-misc__gradient-form tile--borderless" data-modal="">
        <iframe id="registration-form" src="https://info.dynatrace.com/2019_08_15_apac_anz_dh_performgo_sydney_12644_registration.html" width="300px" frameborder="0" scrolling="no" style={{ margin:'0 auto !important', height:'810px', maxWidth: '300px' }}></iframe>
      </div>

    </div>
  </div>
)