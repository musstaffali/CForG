import React from "react"
import Layout from "../components/layout"
import Project from "../components/project.js"

const OurProjects = () => (
  <Layout>
    <section className="projects-container">
      <h1>Our Service to the Community</h1>
      <p className="mx-3 my-3">
        Our projects are focused to the needs of the ocmmunity. We typically
        look for community partners who will sponsor the project by givin us
        critical feedback our solutions, their processes, and the tech involved.
        In addition, we have a project lead who helps manage the project and its
        progress. Also, we have an approver (someone in leadership) who approves
        plans, ideas, and motions for the project.{" "}
      </p>
      <Project
        title="Go Vote App"
        status="Active"
        link="https://github.com/codeforgso/GoVote"
        linktxt="Contribute Now"
        body="Our voter information app (2020 re-release coming soon!) that aims to help reduce barriers to voting for Greensboro and Guilford County residents."
      />
      <Project
        title="Expungement"
        status="Complete"
        link="https://drive.google.com/file/d/1jPyCwdsrRI42_HNpWrSRPte_hYHLkEVP/view?usp=sharing"
        linktxt="View the Document"
        body="We worked with local organizations to create a journey map of the process Guilford County residents must go through to get their record expunged, which will undeservedly impede their access to employment. Tools like this help increase access to resources and information for this process."
      />
      <Project
        title="Food Desert"
        status="Inactive"
        link=""
        linktxt="Check Back Later"
        body="Greensboro is currently suffering from food deserts that make it difficult for people to reach food markets without personal transporation. We are currently looking at how to make it easier for people to reach a food source without dependency on public or private transportation."
      />
    </section>
  </Layout>
)

export default OurProjects
