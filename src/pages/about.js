import React from "react"
import Layout from "../components/layout"
import OvalButton from "../components/oval_button"
const About = () => (
  <Layout>
    <section>
      <h1>Who we are</h1>
      <p>
        Code for Greensboro, also known as Code for GSO for short, is an
        organization extending from Code for America our 501(c)3 fiscal sponsor.
        We serve the local communities in Greensboro, North Carolina through
        Civic Tech to solve community needs.
      </p>
    </section>
    <section>
      <h1>What is Civic Tech?</h1>
      <p>
        “There is no one ‘industry standard’ definition of civic tech...” -Stacy
        Donohue
      </p>
      <p>
        There are a few expamles that demonstrate what civic tech is, but the
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
      <h1>Leaders</h1>
      <p>**BUILD LEADERS COMPONENT HERE**</p>
      <OvalButton
        text="Join Us"
        external="true"
        to="https://bit.ly/cfgso-slack"
      />
      >
    </section>
  </Layout>
)

export default About
