import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"

export default () => (
<div className={styles.coverpage}>
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Thank You!</h1>
       <h2>Your message was successfully submitted!</h2>
       <h2>I'll answer you ASAP.</h2>
            
            <Link to="/works/">Back to work..</Link>
        </div>
    </div>
</div>  

)
