import React from "react"
import "./styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import hqico from "../images/sponsors/hqgso.jpg"
import allegacyico from "../images/sponsors/allegacy.jpg"
import ibmico from "../images/sponsors/ibm.jpg"
import cfaico from "../images/sponsors/cfa.jpg"
import flaghouse1 from "../images/homepage/flags-on-homes1.jpg"
import flaghouse2 from "../images/homepage/flags-on-homes2.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Code for Greensboro - Local Code for America Brigade" />
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
        <div className="column is-one-fifth">
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
            <div className="btn-arrow">ARWICON</div>
          </div>
        </div>
        <div className="column is-one-fifth">
          <figure className="image is-square">
            <image src={flaghouse2} alt="" />
          </figure>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <h1>SPONSORS</h1>
      </div>
      <div className="sponsors-wrapper">
        <figure className="image is-96x96">
          <img class="is-rounded sponsor-ico" src={hqico} alt="" />
        </figure>
        <figure className="level-item image is-96x96">
          <img class="is-rounded sponsor-ico" src={allegacyico} alt="" />
        </figure>
        <figure className="level-item image is-96x96">
          <img class="is-rounded sponsor-ico" src={ibmico} alt="" />
        </figure>
        <figure className="level-item image is-96x96">
          <img class="is-rounded sponsor-ico" src={cfaico} alt="" />
        </figure>
      </div>
    </section>
  </Layout>
)

export default IndexPage
