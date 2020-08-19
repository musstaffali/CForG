import React from "react"
import Layout from "../components/layout"
import hqico from "../images/sponsors/hqgso2.svg"
import allegacyico from "../images/sponsors/allegacy.jpg"
import ibmico from "../images/sponsors/ibmico.jpg"
import OvalButton from "../components/oval_button"

const Sponsor = () => (
  <Layout>
    <section className="sponsors">
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
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <OvalButton
            text="Email Us"
            to="mailto:hello@codeforgreensboro.org"
            external="true"
          />
        </div>
      </div>
    </section>
    <section>
      <h1>Support Our Cause</h1>
      <p className="my-3 mx-3">
        We are focused on helping our community using technology, agile
        processes, and bringing people together. Sponsoring us helps further our
        cause to connect with community members, collaborate with each other,
        and help resolve a variety of issues the people of Greensboro face.
      </p>
      <h1>Benefits</h1>
      <div className="content">
        <p className="mt-3 mx-3">
          Benefits for general sponsorship include the following:
        </p>
        <ul className="ml-6">
          <li>Shout out on our website, and social media platforms.</li>
          <li>Tax deductions for your contributions.</li>
          <li>Helping to solve significant local issues.</li>
          <li>
            Your logo and name mentioned in the apps, websites, and other
            content or deliverables produced (Project-specific Sponsorships)
          </li>
        </ul>
      </div>
      <h1>How to Sponsor</h1>
      <p className="my-3 mx-3">
        Below the corporate sponsor list is a button to initiate the
        conversation with our leadership. Someone will reach back out to learn
        more about what you want to support and contribute. We would also like
        to make sure there is someone to make sure that your contributions are
        properly used and that any in-kind donations will be addressed. You can
        always contact us at hello@codeforgreensboro.org for information and to
        have any questions answered.
      </p>
    </section>
  </Layout>
)

export default Sponsor
