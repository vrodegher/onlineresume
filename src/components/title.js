import React, { Component } from 'react'
import anime from 'animejs'
import * as gatsby from "gatsby"

class Animated extends Component {

  componentDidMount(){
      
    anime({
        targets: '.m115 .word',
        scale: [20,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 800 * i;
    },
        loop: false
    })
  }
  render() {
    return(
      <div>
       <gatsby.Link to="/works/">
          <h1 className="m115"> 
            <span className="word">Vanessa
             Rodegher</span> 
          </h1>
          <h2 className="m115">
            <span className="word">Creative</span>
            <span className="word"> Front End
             Developer</span>
          </h2>
          <h2 className="m115 klein"><span className="word">Have a look...</span></h2>
       </gatsby.Link>
      </div>
    )
  }
}

export default Animated