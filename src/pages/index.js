import React from "react"
import "./styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Code for Greensboro - Local Code for America Brigade" />
    <section className="hero is-success is-halfheight has-hero-img">
      <div className="hero-body">
        <div className="column is-two-fifths">
          <h1 className="title hero-mission">
            Code for Greensboro's mission is to engage our community and its
            talent through civic action, open data, and technology
          </h1>
        </div>
      </div>
    </section>
    <section className="hero-about">
      <div className="container">
        <h1>WHO WE ARE</h1>
        <p>
          Code for Greensboro is a brigade from a larger organization called
          Code for America. It is our vision and mission to improve the
          well-being of our communities in Greensboro through utilizing
          technology, process, and (most importantly) the people. This is for us
          and operated by us. If you’re a coder, designer, or have something
          else to contribute, we’d love to have you come along with us on this
          journey.{" "}
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
