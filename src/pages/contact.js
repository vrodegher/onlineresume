import React from "react"
import styles from "./contact.module.css"
import Layout from "../components/layout"



export default () => (
  <Layout>
    <div className={styles.coverpage}>
      <br/>
      <br />
    <h2>Hi, you can contact me here</h2>
   <form
   className="contact-form"
    name="contact-form"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/success"
    >
      <h3><label for="name">Name</label>
      <input name="name" placeholder="Jean Doe" type="text" /></h3>
      <h3><label for="email">Email</label>
      <input name="email" placeholder="jean@jeandoe.com" type="email" /></h3>
      <h3><label for="message">Message</label>
      <textarea name="message" cols="30" rows="10"/></h3>
      <button className="button contact" type="submit">Send</button>
      
    </form>
   

    <h2>...or here</h2>
    <a href="https://github.com/Rodegrafika" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://twitter.com/v_rodegher" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="https://de.linkedin.com/in/vanessarodegher" target="_blank"><i class="fab fa-linkedin"></i></a>

    


    </div>
  </Layout>
)