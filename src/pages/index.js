import React from "react"
import "./styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import hqico from "../images/sponsors/hqgso.jpg"
import herobg from "../images/homepage/Washington-DC-Capitol.png"
import allegacyico from "../images/sponsors/allegacy.jpg"
import ibmico from "../images/sponsors/ibmico.jpg"
import cfaico from "../images/sponsors/cfa.jpg"

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
    <section className="hero has-background">
      <img className="hero-background is-transparent" src={herobg} alt="" />
      <h1 className="hero-title is-overlay">
        Civic Tech to serve greater Greensboro. No tech background needed, just
        you and the community.
      </h1>
    </section>
    <section className="hero-about">
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
    <div className="columns is-mobile is-gapless">
      <div className="column is-four-fifths featured-title">
        <h1> Featured Project</h1>
      </div>
      <div className="column has-background-danger"></div>
    </div>
    <div className="featured-project">
      <h2>Go Vote App</h2>
      <p>
        We are working on an app that not only helps people be registered voters
        but to also know quickly where they vote, what voting areas, and all the
        “Need to know” of the candidates in a comprehensive, bite-sized
        experience.
      </p>
    </div>
    <div>
      <OvalButton
        text="Join Project"
        to="https://cfgso.slack.com/archives/C380GFJJ3"
        external="true"
      />
    </div>
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
      <OvalButton text="Sponsor Us" to="sponsor" external="false" />
      <div className="container">
        <h1 className="has-text-centered">Individual Supporters</h1>
        {/*insert variable or query for supporter list here*/}
      </div>
    </section>
  </Layout>
)

export default IndexPage
