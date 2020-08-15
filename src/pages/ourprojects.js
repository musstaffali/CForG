import React from "react"
import Layout from "../components/layout"
import Project from "../components/project.js"

const OurProjects = () => (
  <Layout>
    <Project
      title="Go Vote App"
      status="Active"
      repo="https://github.com/codeforgso/GoVote"
      body="We see a need for an app that helps people become voters with less barriers such as lack of education, transportation, and bias systems."
      slack="https://cfgso.slack.com/messages/proj-govotegso"
    />
  </Layout>
)

export default OurProjects
