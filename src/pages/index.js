import React from "react"
import "./styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import hqico from "../images/sponsors/hqgso.jpg"
import herobg from "../images/homepage/Washington-DC-Capitol.png"
import allegacyico from "../images/sponsors/allegacy.jpg"
import ibmico from "../images/sponsors/ibmico.jpg"
import cfaico from "../images/sponsors/cfa.jpg"
import Project from "../components/project"
import { Helmet } from "react-helmet"
import OvalButton from "../components/oval_button"
const IndexPage = () => (
  <Layout>
    <SEO title="Code for Greensboro - Local Code for America Brigade" />
    <Helmet>
      <script
        src="https://kit.fontawesome.com/fbb5c49af7.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
    <section className="hero is-halfheight has-background">
      <img className="hero-background is-transparent" src={herobg} alt="" />
      <div className="hero-body is-overlay">
        <h1 className="hero-title">
          Civic Tech to serve greater Greensboro. <br></br>
          No tech background needed, just you and the community.
        </h1>
      </div>
    </section>
    <section>
      <div className="container">
        <h1>Mission</h1>
      </div>
      <p>
        Code for Greensboro is a brigade from a larger organization called Code
        for America. It is our vision and mission to improve the well-being of
        our communities in Greensboro through utilizing technology, process, and
        (most importantly) the people. This is for us and operated by us. If
        you’re a coder, designer, or have something else to contribute, we’d
        love to have you come along with us on this journey.
      </p>
    </section>
    <div className="columns is-mobile is-gapless mb-0">
      <div className="column is-four-fifths featured-title">
        <h1> Featured Project</h1>
      </div>
      <div className="column has-background-danger"></div>
    </div>
    <section className="featured-project">
    <Project
      title="Go Vote App"
      status="Active"
      repo="https://github.com/codeforgso/GoVote"
      body="We see a need for an app that helps people become voters with less barriers such as lack of education, transportation, and bias systems."
    />
    </section>
    <section className="sponsors">
      <p>
        Code for Greensboro could not make it without the help of our community.
        Both tech-savvy and not, we have had the opportunity to help others
        through the projects we conduct. The more the merrier, as the level of
        impact we have is dependent on those who help. Join us on Slack and at
        our meetups.
      </p>
      <h1>Corporate Sponsors</h1>
      <div className="icons-wrapper">
        <figure className="image is-96x96 captioned-ico">
          <img className="is-rounded sponsor-ico" src={hqico} alt="" />
          <figcaption>HQ Greensboro</figcaption>
        </figure>
        <figure className="image is-96x96 captioned-ico">
          <img className="is-rounded sponsor-ico" src={allegacyico} alt="" />
          <figcaption>Allegacy</figcaption>
        </figure>
        <figure className="image is-96x96 captioned-ico">
          <img className="is-rounded sponsor-ico" src={ibmico} alt="" />
          <figcaption>IBM</figcaption>
        </figure>
        <figure className="image is-96x96 captioned-ico">
          <img className="is-rounded sponsor-ico" src={cfaico} alt="" />
          <figcaption>Code for America</figcaption>
        </figure>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <OvalButton text="Sponsor Us" to="sponsor" external="false" />
        </div>
      </div>
      <div className="container">
        <h1 className="has-text-centered">Individual Supporters</h1>
      </div>
      <div className="columns ind-supporters is-mobile mt-3">
        <div className="column has-text-centered">
          Leonard
        </div>
        <div className="column has-text-centered">
          Ari Gilliam
        </div>
        <div className="column has-text-centered">
          Gabi Looney
        </div>
        <div className="column has-text-centered">
          Ken Causey
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
