import React from "react"
import Layout from "../components/layout"
import Project from "../components/project.js"

const OurProjects = () => (
  <Layout>
    <section className="projects-container">
    <Project
      title="Go Vote App"
      status="Active"
      repo="https://github.com/codeforgso/GoVote"
      body="We see a need for an app that helps people become voters with less barriers such as lack of education, transportation, and bias systems."
    />
    <Project
      title="Expungement"
      status="Active"
      repo="https://docs.google.com/document/d/1EsfIT89gIpJcxy1sf0nuBPZYMyYJo6p214Bh_3ZsKuM/edit"
      body="The brigade is looking for a way to give people easier access to resources and information that can help a person expunge any and all federal non-violent crimes from their record which is often a barrier for said individual to find employment."
    />
    <Project
      title="Food Desert"
      status="Active"
      repo="https://github.com/codeforgso/triad-food-hardship"
      body="Greensboro is currently suffering from food deserts that make it difficult for people to reach food markets without personal transporation. We are currently looking at how to make it easier for people to reach a food source without dependency on public or private transportation."
    />
    </section>
  </Layout>
)

export default OurProjects
