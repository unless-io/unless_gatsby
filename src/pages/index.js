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
        className={isMounted ? "slideIn banner" : "banner"}
        style={{
          marginBottom: `1.45rem`,
          height: `calc(100vh - 290px)`,
          width: `100%`,
          opacity: `0`,
        }}
      />
    </Layout>
  )
}

export default IndexPage
