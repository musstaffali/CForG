import React from "react"
import Layout from "../components/layout"

const FAQ = () => (
  <Layout>
    <section>
      <h1>FAQ</h1>
      <p className="is-italic my-3 mx-3">
        Do you need to have a background in tech?
      </p>
      <p className="has-text-weight-bold mt-3 mb-5 mx-6">
        NO. You do not have to have any knowledge of tech in your background to
        join nor to be part of our projects. In fact, WE NEED people that
        specialize in other fields like administration, art, social work,
        education, and etc. to help solve other challenges each project faces,
        as well as the challenges of the brigade.
      </p>
      <p className="is-italic my-3 mx-3">Can I get a job here?</p>
      <p className="has-text-weight-bold mt-3 mb-5 mx-6">
        Actually, we sometimes have job postings made by one of our members.
        Sometimes they are opportunities someone found and shares with our
        community on Slack. The brigade it self does not hold any paid positions
        as everyone is volunteer-based. Our parent organization, Code for
        America, hosts a job board you can check out{" "}
        <a
          href="https://jobs.codeforamerica.org/"
          target="blank"
          rel="noreferrer"
        >
          here.
        </a>
      </p>
      <p className="is-italic my-3 mx-3">How often do you meet?</p>
      <p className="has-text-weight-bold mt-3 mb-5 mx-6">
        We meet at least once a month, if not twice a month. Typically we meet
        inperson at HQ Greensboro but have been exploring virtual possibilities
        especially in consideration to the COVID-19 Pandemic.
      </p>
      <p className="is-italic mt-6 mx-3">
        Want to work with us, suggest a project, or have other questions? Fill
        out the form{" "}
        <a
          className="has-text-weight-bold"
          href="https://docs.google.com/forms/d/e/1FAIpQLScssdp5lqB2IZ_BX1SnL68k0u9P7iAS8_2QPgkHDSEkSUFs6g/viewform?usp=pp_url"
          target="blank"
          rel="noreferrer"
        >
          {" "}
          here
        </a>{" "}
        to send us more information!
      </p>
    </section>
    <section>
      <h1 className="mb-3">Coding Resources</h1>
      <ul className="pl-3">
        <li>
          <a href="https://www.w3schools.com/">w3 schools</a>
        </li>
        <li>
          <a href="https://www.freecodecamp.org/">Free Code Camp</a>
        </li>
        <li>
          <a href="https://javascript.info/">Javascript.info</a>
        </li>
        <li>
          <a href="https://www.gatsbyjs.org/">Gatsby</a>
        </li>
        <li>
          <a href="https://bulma.io/">Bulma</a>
        </li>
        <li>
          <a href="https://getbootstrap.com/">Bootstrap</a>
        </li>
        <li>
          <a href="https://reactjs.org/">React.JS</a>
        </li>
        <li>
          <a href="https://angular.io/">Angular</a>
        </li>
        <li>
          <a href="https://material.io/">Material Design</a>
        </li>
        <li>
          <a href="https://developers.google.com/fonts">Google Fonts API</a>
        </li>
        <li>
          <a href="https://docs.microsoft.com/en-us/learn/">Microsoft Learn</a>
        </li>
        <li>
          <a href="https://developer.ibm.com/">IBM Developer</a>
        </li>
        <li>
          <a href="https://www.codeforamerica.org/">Code For America</a>
        </li>
        <li>
          <a href="https://codeforall.org/">Code For All</a>
        </li>
      </ul>
    </section>
  </Layout>
)

export default FAQ
