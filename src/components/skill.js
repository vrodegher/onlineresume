import React from "react"
import styles from "./skill.module.css"



const SkillBar = (props) => {
    return (<div>
        <SkillName skillname={props.skillname} />
        <div className={styles.skillbar}>
        <Filler percentage={props.percentage} />
        </div>
        </div>
    )
}

const Filler = (props) => {
    return <div className={styles.filler} style={{ width: `${props.percentage}%` }} />

}

const SkillName = (props) => {
    return <h4>{props.skillname}</h4>
}



export default SkillBar;
  
 