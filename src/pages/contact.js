import * as React from "react"
import useIsMounted from "../hooks/use_is_mounted"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const isMounted = useIsMounted()

  return (
    <Layout>
      <Seo title="About" />
      <div
        style={{
          marginBottom: `1.45rem`,
          width: `100%`,
        }}
      >
        <h1>Contact</h1>
        <form
          action="https://formspree.io/info@unless.io"
          method="POST"
          className="form-grid"
        >
          <div className={isMounted ? "form-group slideInVisible" : "form-group"} style={{animationDelay: `50ms`}}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={isMounted ? "form-group slideInVisible" : "form-group"} style={{animationDelay: `100ms`}}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={isMounted ? "form-group slideInVisible" : "form-group"} style={{animationDelay: `150ms`}}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              name="message"
              style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
            ></textarea>
          </div>
          <input type="submit" className="form-submit" />
        </form>
      </div>
    </Layout>
  )
}

export default IndexPage
