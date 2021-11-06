import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="About" />
    <div
      style={{
        marginBottom: `1.45rem`,
        width: `100%`,
        marginTop: `150px`,
      }}
    >
      <h1>Portfolio</h1>

    </div>
  </Layout>
)

export default IndexPage
