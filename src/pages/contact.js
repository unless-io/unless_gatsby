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
      <h1>Contact</h1>
      <form action="https://formspree.io/info@unless.io" method="POST" className="form-grid">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" cols="30" rows="10" name="message"></textarea>
        </div>
        <input type="submit" className="form-submit" />
      </form>
    </div>
  </Layout>
)

export default IndexPage
