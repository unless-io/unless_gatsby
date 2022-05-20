import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import useIsMounted from "../hooks/use_is_mounted"
import UseArticles from "../hooks/use_articles"

const IndexPage = () => {
  const isMounted = useIsMounted()

  const handleHighlight = event => {
    if (event.target.nodeName !== "A") {
      event.preventDefault()
      event.currentTarget.classList.toggle("active")
    }
  }

  return (
    <Layout>
      <Seo title="Portfolio" />
      <div
        style={{
          marginBottom: `1.45rem`,
          width: `100%`,
        }}
      >
        <h1>Portfolio</h1>
        <p>
          A selection of some of the projects we've worked on
        </p>
        <div className="image-grid">
          {UseArticles()
            .sort((a, b) => {
              return a.order - b.order
            })
            .map((article, index) => (
              <button
                className="image-wrapper"
                key={index}
                onClick={handleHighlight}
              >
                <div className="content">
                  <Image
                    fluid={
                      article.thumbnail
                        ? article.thumbnail.childImageSharp.fluid
                        : ""
                    }
                    className={isMounted ? "slideIn" : ""}
                    imgStyle={{
                      objectFit: "contain",
                      boxSizing: "border-box",
                      objectPosition: `left`,
                    }}
                  />
                  <h2>{article.title}</h2>
                  <MDXRenderer>{article.body}</MDXRenderer>
                </div>
              </button>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
