import React from "react"
import "./styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Code for Greensboro - Local Code for America Brigade" />
    <h1>Hello Greensboro!</h1>
    <p>
      Shiny new website for Code for Greensboro - the Greensboro, NC Code for
      America brigade
    </p>
    <p>Coming Soon to a browser near you!</p>
    <a href="https://codeforgsogithubio.codeforgso.now.sh/">
      The Previous Site
    </a>
  </Layout>
)

export default IndexPage
