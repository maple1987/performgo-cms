import React from 'react'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://www.dynatrace.com/common/js/main-4c2ec5d52a.js'
    this.dom.appendChild(script)

    // add stylesheet to iframe head
    if (process.browser && window.CMS) {
      const style = document.createElement('link')
      style.href = 'https://www.dynatrace.com/common/css/main-5ee3187763.css'
      style.rel = 'stylesheet'
      this.dom.ownerDocument.head.appendChild(style)
    }
  }

  render() {
    return (
      <footer className="footer" ref={el => (this.dom = el)}>
        <div className="footer__legal">
          <p className="u-text-center"><a className="footer__link" href="/company/trust-center/">Trust Center</a> | <a className="footer__link" href="/company/trust-center/policies/">Policies</a> | <a className="footer__link" href="/company/trust-center/terms-of-use/">Terms of use</a> | <a className="footer__link" href="/sitemap/">Sitemap</a></p>
          <p>© 2019 Dynatrace LLC. All rights reserved.</p>
        </div>
      </footer>
    )
  }
}
