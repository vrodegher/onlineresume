import React from "react"
import styles from "./contact.module.css"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className={styles.coverpage}>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
    </div>
  </Layout>
)