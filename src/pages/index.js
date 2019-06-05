import React from "react"
import styles from "./index.module.css"
import * as gatsby from "gatsby"

export default () => (
<div className={styles.coverpage}>
    <div className={styles.container}>
        
        <gatsby.Link to="/works/"><h1>Vanessa Rodegher</h1>
            <h4>Frontend Developer/Designer</h4></gatsby.Link>
            <gatsby.Link to="/works/">Have a look..</gatsby.Link>
       
    </div>
</div>  

)

