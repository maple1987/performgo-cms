import React from 'react'
import Head from 'next/head'

export default ({ region, city }) => (
  <Head>
    <title>
      { region ? `DynatraceGo! ${region.name}` : '' }
      { city ? `${city.name} - PerformGo! Series 2019` : '' }
     | Dynatrace
    </title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://dt-cdn.net/images/favicon-32x32-32-26d70a5cff.png"></link>
    <link rel="stylesheet" href="https://www.dynatrace.com/common/css/main-5ee3187763.css" />
    <link href="https://www.dynatrace.com/common/css/print-bd69d927f4.css" rel="stylesheet" media="print" type="text/css" />
  </Head>
)