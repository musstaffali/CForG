import React from "react"
import Layout from "../components/layout"
import ethan from "../images/leaders/ethan.jpg"
import jordan from "../images/leaders/jordan.jpg"
import erich from "../images/leaders/erich.jpg"
import trey from "../images/leaders/trey.jpg"
import tim from "../images/leaders/tim.jpg"

const About = () => (
  <Layout>
    <section className="blurb">
      <h1>Who we are</h1>
      <p className="my-3 mx-3">
        Code for Greensboro, also known as Code for GSO for short, is an
        organization extending from Code for America our 501(c)3 fiscal sponsor.
        We serve the local communities in Greensboro, North Carolina through
        Civic Tech to solve community needs.
      </p>
    </section>
    <section className="blurb">
      <h1>What is Civic Tech?</h1>
      <p className="my-3 mx-3">
        “There is no one ‘industry standard’ definition of civic tech...” -Stacy
        Donohue
      </p>
      <p>
        There are a few examples that demonstrate what civic tech is, but the
        common traits to civic tech would be focused on engaging in processes to
        help resolve community and social problems through technology. The
        Omidyar Network defines their meaning of Civic Tech as “technologies
        that are deployed to enhance the relationship between people and
        government, by giving people more of a voice to participate in public
        decision making and/or to improve the delivery of services (usually by
        gov’t) to people.” (Huffington Post). Technologies can be developed by
        non-profit, for-profit, and non-government organizations. For Code for
        GSO, we develope technologies and resources that we give away to the
        local non-profits, governments, and other brigades of Code for America
        at no charge.
      </p>
    </section>
    <section className="leaders">
      <div className="container">
        <h1>Leaders</h1>
      </div>
      <div className="icons-wrapper">
        <figure className="image is-96x96 captioned-ico">
          <img className="is-rounded sponsor-ico" src={ethan} alt="" />
          <figcaption>Ethan McElvaney</figcaption>
        </figure>
        <figure className="image is-96x96 captioned-ico">
          <img className="is-rounded sponsor-ico" src={jordan} alt="" />
          <figcaption>Jordan Robinson</figcaption>
        </figure>
        <figure className="image is-96x96 captioned-ico">
          <img className="is-rounded sponsor-ico" src={erich} alt="" />
          <figcaption>Erich Keil</figcaption>
        </figure>
        <figure className="image is-96x96 captioned-ico">
          <img className="is-rounded sponsor-ico" src={trey} alt="" />
          <figcaption>Trey Botard</figcaption>
        </figure>
        <figure className="image is-96x96 captioned-ico">
          <img className="is-rounded sponsor-ico" src={tim} alt="" />
          <figcaption>Tim Leisman</figcaption>
        </figure>
      </div>
    </section>
    <section>
      <p className="my-6 has-text-centered">
        Code for Greensboro is a smaller organization sharing its mission and
        vision with its parent organization,{" "}
        <a
          href="https://www.codeforamerica.org/"
          target="blank"
          rel="noreferrer"
        >
          Code for America.
        </a>{" "}
      </p>
    </section>
  </Layout>
)

export default About
