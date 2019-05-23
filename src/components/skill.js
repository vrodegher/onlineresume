import React from "react"
import styles from "./skill.module.css"


class ProgressBarExample extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage: 10
        }
    }
    render() {
        return (
            <div>
                <SkillBar percentage={this.state.percentage} />
            </div>
        )
    }
}

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
    return <h3>{props.skillname}</h3>
}



export default SkillBar;
  
 