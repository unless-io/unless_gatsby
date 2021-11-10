import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <div
        style={{
          marginBottom: `1.45rem`,
          minHeight: `300px`,
          width: `100%`,
          maxWidth: `800px`,
        }}
      >
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
