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
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
      <h3><label for="name">Name</label>
      <input name="name" placeholder="Jean Doe" type="text" /></h3>
      <h3><label for="email">Email</label>
      <input name="email" placeholder="jean@jeandoe.com" type="email" /></h3>
      <h3><label for="message">Message</label>
      <textarea name="message" cols="30" rows="10"/></h3>
      <button className="button contact">Send</button>
      
    </form>
   

    <h2>...or here</h2>
    <i class="fab fa-github"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-linkedin"></i>

    


    </div>
  </Layout>
)