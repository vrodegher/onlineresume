import { Link } from "gatsby"
import React from "react"
import styles from "./footer.module.css"

const Footer = () =>
<div className={styles.footer}>
<p>Vanessa Rodegher 
  © 
  {new Date().getFullYear()}, Built with
{` `}
<Link to="https://www.gatsbyjs.org">Gatsby</Link>
</p>
</div>

export default Footer;