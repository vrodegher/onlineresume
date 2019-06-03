import React from "react"
import styles from "./about.module.css"
import Layout from "../components/layout"
import Image from "../components/image"



export default ({ data }) => (
  <Layout>
    

    <div classNamw="row">
      <div className="column half">
        <div className={styles.profileimage}>
        <Image />
        </div>
     
      </div>
      <div className="column half">
        <h2>Hi there!</h2>
<p> I'm Vanessa Rodegher a Web Designer and Developer based in Berlin.  </p>
<p>My background is a bit unusual, I've studied "Performing Art and Media" in Venice (Italy) and "Illustration Design" in Berlin (Germany), and teach myself how to code!</p>
<p>Here is a list of the stuff I like to work with, but I'm always looking for learning something new and I enjoy challenging myself!
</p>
<p>...and yes I speak fluently German, English and of course Italian.</p>
<br/>
      </div>
    </div>
   
    <div classNamw="row">
      <div className="column one">
    
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



