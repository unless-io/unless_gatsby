import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useIsMounted from "../hooks/use-is-mounted"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const isMounted = useIsMounted()

  return (
    <Layout>
      <Seo title="Home" />
      <StaticImage
        src="../images/banner.png"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Hands at a desk working on a computer"
        className={isMounted ? "slideIn" : ""}
        style={{
          marginBottom: `1.45rem`,
          height: `calc(100vh - 290px)`,
          maxHeight: `500px`,
          width: `100%`,
          marginTop: `150px`,
          opacity: `0`,
          animationDuration: `400ms`,
          animationFillMode: `forwards`,
        }}
      />
    </Layout>
  )
}

export default IndexPage
