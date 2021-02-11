import React from "react"
import "./styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import hqico from "../images/sponsors/hqgso2.svg"
import herobg from "../images/homepage/Washington-DC-Capitol.png"
// import allegacyico from "../images/sponsors/allegacy.jpg"
import ibmico from "../images/sponsors/ibmico.jpg"
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
      <h1>Mission</h1>
      <p className="my-3 ml-3">
        Code for Greensboro is a local chapter of Code for America, a national
        501(c)(3) nonprofit. We are dedicated to helping grow Greensboro’s tech
        community and improve local government services through the development
        of civic technology projects, the volunteer efforts of local members of
        our community, and by educating the public on opportunities to
        contribute to their community through technology.
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
        title="GoVoteGSO App"
        status="Active"
        link="https://github.com/codeforgso/GoVote"
        linktxt="Contribute Now"
        body="Our voter information app (2020 re-release coming soon!) that aims to help reduce barriers to voting for Greensboro and Guilford County residents."
      />
    </section>

    <section className="sponsors">
      <p className="my-3">
        Code for Greensboro could not make it without the help of our community.
        Both tech-savvy and not, we have had the opportunity to help others
        through the projects we conduct. The more the merrier, as the level of
        impact we have is dependent on those who help. Join us on Slack and at
        our meetups.
      </p>

      <h1>Corporate Sponsors</h1>
      <div className="icons-wrapper">
        <a href="https://hqgreensboro.com/" target="blank" rel="noreferrer">
          <figure className="image is-96x96 captioned-ico">
            <img
              className="is-rounded sponsor-ico"
              src={hqico}
              alt="HQ Greensboro icon"
            />
            <figcaption>HQ Greensboro</figcaption>
          </figure>
        </a>
        {/* <a href="https://www.allegacy.org/" target="blank" rel="noreferrer">
          <figure className="image is-96x96 captioned-ico">
            <img
              className="is-rounded sponsor-ico"
              src={allegacyico}
              alt="Allegacy icon"
            />
            <figcaption>Allegacy</figcaption>
          </figure>
        </a> */}
        <a href="https://www.ibm.com/" target="blank" rel="noreferrer">
          <figure className="image is-96x96 captioned-ico">
            <img
              className="is-rounded sponsor-ico"
              src={ibmico}
              alt="IBM icon"
            />
            <figcaption>IBM</figcaption>
          </figure>
        </a>
      </div>

      <div className="sponsorbutton">
        <OvalButton text="Sponsor Us" to="sponsor" external="false" />
      </div>
    </section>
  </Layout>
)

export default IndexPage
