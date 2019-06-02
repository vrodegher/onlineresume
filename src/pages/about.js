import React from "react"
import styles from "./about.module.css"
import Layout from "../components/layout"
import Image from "../components/image"



export default ({ data }) => (
  <Layout>
    <h1>About me</h1>

    <div classNamw="row">
      <div className="column half">
        <div className="profileimage">
        <Image />
        </div>
     
      </div>
      <div className="column half">
        <h3>Hi there!</h3>
<p>I'm Vanessa Rodegher a Web Designer and Developer based in Berlin.
I create functional and beautiful websites.
I work with different tools, from frameworks like Bootstrap to plain HTML and CSS with JavaScript or jQuery, or using a bit of PHP to find my way through WordPress... I like to challenge myself and learn new things.</p>
      </div>
    </div>
    <div classNamw="row">
      <div className="column one">
    <h2>Skills</h2>
    </div>
    </div>
    <div classNamw="row">
      <div className="column half">
        <div className={styles.skillcard}>
          <h2>Web Technologies and Frameworks</h2>
          <h3>HTML5/CSS3 </h3>
          <h3>React.js - Gatsby.js </h3>
          <h3>Vue.js (basic knowledge)</h3>
        </div>
      </div>
    
      <div className="column half">
        <div className={styles.skillcard}>
          <h2>Scripts/UI</h2>
          <h3>Javascript (ES6+)</h3>
          <h3>JQuery</h3>
          <h3>Bootstrap</h3>
          <h3>PHP7 (basic knowledge)</h3>
         
        </div>
      </div>
    </div>
   
    <div classNamw="row">
      <div className="column half">
    <div className={styles.skillcard}>
    <h2>CMS and Database</h2>
    <h3>Wordpress</h3>
    <h3>MySQL - (MyPHPAdmin) </h3>
    <h3>Drupal (basic knowledge)</h3>
    </div>
    </div>
    <div className="column half">
    <div className={styles.skillcard}>
    <h2>Versioning and other tools:</h2>
    <h3>GIT</h3> <h3>Github</h3> <h3>Chrome Dev Tools</h3> <h3>NPM</h3>
    </div>
    </div>
</div>
<div className="row">
    <div className={styles.skillcard}>
    <h2>Design</h2>
    <h3>Responsive Design - UI/UX - Adobe CC - Adobe XD</h3>
    </div>
</div>
   

    
    
  </Layout>
)



