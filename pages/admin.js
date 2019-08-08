import React, { Component } from 'react'
import Head from 'next/head'

const regions = ['north-america', 'apac', 'europe', 'latin-america']

export default class Admin extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/netlify-cms@2.9.7/dist/netlify-cms.js'
    document.body.appendChild(script)
    script.onload = () => {
      // Add preview for CMS editor
      regions.forEach(regin => {
        window.CMS.registerPreviewTemplate(regin, require('./city').CityPreview)
      })
    }
  }

  render() {
    return (
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PerformGo! Content Manager</title>
        <link rel="icon" href="https://dt-cdn.net/images/favicon-32x32-32-26d70a5cff.png"></link>
        <link href="/static/config.yml" type="text/yaml" rel="cms-config-url"></link>
      </Head>
    )
  }
}