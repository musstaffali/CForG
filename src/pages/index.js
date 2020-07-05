import React from "react"
import "./styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import hqico from "../images/sponsors/hqgso.jpg"
import allegacyico from "../images/sponsors/allegacy.jpg"
import ibmico from "../images/sponsors/imbico.jpg"
import cfaico from "../images/sponsors/cfa.jpg"
import flaghouse1 from "../images/homepage/flags-on-homes1.jpg"
import flaghouse2 from "../images/homepage/flags-on-homes2.jpg"
import slackico from "../images/social/slack_icon.svg"
import githubico from "../images/social/github_icon.svg"
import meetupico from "../images/social/meetup_icon.svg"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <SEO title="Code for Greensboro - Local Code for America Brigade" />
    <Helmet>
      <script
        src="https://kit.fontawesome.com/fbb5c49af7.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
    <section className="hero is-success is-halfheight has-hero-img">
      <div className="hero-body">
        <div className="column is-two-fifths">
          <p className="title hero-mission">
            Code for Greensboro's mission is to engage our community and its
            talent through civic action, open data, and technology
          </p>
        </div>
      </div>
    </section>
    <section className="hero-about">
      <div className="container">
        <h1>WHO WE ARE</h1>
      </div>
      <div className="columns">
        <div className="column is-one-fifth is-hidden-mobile">
          <figure className="image is-square">
            <image src={flaghouse1} alt="" />
          </figure>
        </div>
        <div className="column is-three-fifths">
          <p>
            Code for Greensboro is a brigade from a larger organization called
            Code for America. It is our vision and mission to improve the
            well-being of our communities in Greensboro through utilizing
            technology, process, and (most importantly) the people. This is for
            us and operated by us. If you’re a coder, designer, or have
            something else to contribute, we’d love to have you come along with
            us on this journey.{" "}
          </p>
          <div className="join-button">
            <Link className="join-button-link" to="/join">
              Join Us
            </Link>
            <div className="btn-arrow">
              <i class="fas fa-arrow-right fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="column is-one-fifth is-hidden-mobile">
          <figure className="image is-square">
            <image src={flaghouse2} alt="" />
          </figure>
        </div>
      </div>
    </section>
    <section className="sponsors">
      <div className="container">
        <h1>SPONSORS</h1>
      </div>
      <div className="icons-wrapper">
        <figure className="image is-96x96">
          <img class="is-rounded sponsor-ico" src={hqico} alt="" />
        </figure>
        <figure className="image is-96x96">
          <img class="is-rounded sponsor-ico" src={allegacyico} alt="" />
        </figure>
        <figure className="image is-96x96">
          <img class="is-rounded sponsor-ico" src={ibmico} alt="" />
        </figure>
        <figure className="image is-96x96">
          <img class="is-rounded sponsor-ico" src={cfaico} alt="" />
        </figure>
      </div>
    </section>
    <section>
      <div className="join-platforms">
        <div className="container">
          <h1>JOIN THE GROUP</h1>
          <p>
            If you want to improve the well-being of Greensboro, these platforms
            are the best way to meet us and volunteer for our many current
            projects.
          </p>
        </div>
        <div className="columns">
          <div className="column">
            <img src={slackico} alt="Slack Logo" />
            <div className="join-button">
              <a
                className="join-button-link"
                href="https://bit.ly/cfgso-slack"
                target="_blank"
                rel="noreferrer"
              >
                Join Us
              </a>
              <div className="btn-arrow">
                <i class="fas fa-arrow-right fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={githubico} alt="GitHub Logo" />
            <div className="join-button">
              <a
                className="join-button-link"
                href="https://github.com/codeforgso"
                target="_blank"
                rel="noreferrer"
              >
                Join Us
              </a>
              <div className="btn-arrow">
                <i class="fas fa-arrow-right fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={meetupico} alt="Meetup Logo" />
            <div className="join-button">
              <a
                className="join-button-link"
                href="https://www.meetup.com/Code-for-Greensboro/"
                target="_blank"
                rel="noreferrer"
              >
                Join Us
              </a>
              <div className="btn-arrow">
                <i class="fas fa-arrow-right fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="donate-sponsor">
      <div className="container">
        <h1>DONATE OR SPONSOR US</h1>
        <p>
          Our organization would be nothing without the support of our generous
          sponsors and donors. Whether you can donate $1 or $100, every bit
          counts to keep Code for Greensboro serving the Triad community.{" "}
        </p>
      </div>
      <a
        href="https://secure.codeforamerica.org/page/contribute/donate-to-a-brigade-today?source_codes=Brigade-page&brigade=Code%20for%20Greensboro"
        target="_blank"
        rel="noreferrer"
      >
        <div className="join-button">
          <div class="join-button-link">Donate</div>
          <div className="btn-arrow">
            <i class="fas fa-arrow-right fa-2x"></i>
          </div>
        </div>
      </a>
    </section>
  </Layout>
)

export default IndexPage
