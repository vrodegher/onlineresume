import React from "react"

import Layout from "../components/layout"
import SkillBar from "../components/skill"


export default () => (
  <Layout>
    <h1>About me</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>

    <SkillBar percentage = {90} skillname = {"HTML5"} />
    <SkillBar percentage = {90} skillname = {"CSS3"} />
    <SkillBar percentage = {80} skillname = {"Javascript"} />
    <SkillBar percentage = {50} skillname = {"React"} />
    <SkillBar percentage = {30} skillname = {"Node"} />
  </Layout>
)