import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () =>
<div
style={{
   position: `relative`,
  paddingTop: `3rem`,
   left: 0,
   bottom: 0,
   width: `100%`,
   color: `#363636`,
   textAlign: `center`
    
  }}>
<p>© {new Date().getFullYear()}, Built with
{` `}
<a href="https://www.gatsbyjs.org">Gatsby</a>
</p>
</div>

export default Footer;