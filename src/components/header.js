import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle, }) => (
  <header style={{ marginBottom: `5rem` }}>
      <Link to="/" >
        <h2 style={{ display: `inline` }}>{siteTitle}</h2>
        
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, marginTop: `2.5rem`}}>
        
        <ListLink to="/works/">Works</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
)

  Header.propTypes = {
  siteTitle: PropTypes.string,
  
 }

 Header.defaultProps = {
  siteTitle: ``,
  
 }  

export default Header
