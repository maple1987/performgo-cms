import React from 'react'

export default () => (
  <svg className="angle-section  angle-section--pull-from-bottom" viewBox="0 0 96 101" width="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
    <defs>
      <path className="a" d="m0 0h100v101h-100z"></path>
      <mask className="b" fill="#fff">
        <use fill="#fff" fillRule="evenodd" xlinkHref="#a"></use>
      </mask>
    </defs>
    <g fill="none" fillRule="evenodd" transform="matrix(-1 0 0 1 100 0)">
      <g mask="url(.b)">
        <g stroke="#fff" transform="matrix(0 1 -1 0 98.990099 2)">
          <path d="m98.505.21556643-97.31824032 99.27453257h97.31824032z" fill="#fff" shapeRendering="crispEdges"></path>
          <path d="m0 99.990099c44.0004207-44.4338465 77.0004208-77.7605792 99-99.98019801" strokeLinecap="square" strokeWidth="2"></path>
        </g>
      </g>
    </g>
  </svg>
)