import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"

export default () => (
<div className={styles.coverpage}>
    <div className={styles.container}>
        <div className={styles.title}>
        <Link to="/works/"><h1>Vanessa Rodegher</h1>
            <h4>Frontend Developer/Designer</h4></Link>
            <Link to="/works/">Have a look..</Link>
        </div>
    </div>
</div>  

)

