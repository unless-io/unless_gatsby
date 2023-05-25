import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Badge from "../images/award-duotone.svg"

import useIsMounted from "../hooks/use_is_mounted"
import UseArticles from "../hooks/use_articles"

const IndexPage = () => {
  const isMounted = useIsMounted()

  const handleHighlight = event => {
    if (event.target.nodeName !== "A" && !event.target.closest('a')) {
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
            }).reverse()
            .map((article, index) => (
              <button
                className="image-wrapper"
                key={index}
                onClick={handleHighlight}
              >
                <div className="content">
                  {article.badge_image ?
                    <div className={isMounted ? "badge slideIn" : "badge"}>
                      <div className="badge-icon" aria-label="Nominated for an award!" data-balloon-pos="up">
                        <Badge />
                      </div>
                    </div>
                  : null }
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
                  { article.badge_image ? 
                    <>
                      <div className="award">
                        <h3>
                          Nominated for:
                        </h3>
                        <a href={ article.badge_link } target="_blank" rel="noreferrer">
                          <Image
                            fluid={
                              article.badge_image
                              ? article.badge_image.childImageSharp.fluid
                              : ""
                            }
                            className={isMounted ? "slideIn" : ""}
                            imgStyle={{
                              objectFit: "contain",
                              boxSizing: "border-box",
                              objectPosition: `left`,
                            }}
                          />
                        </a>
                      </div>
                    </>
                  : null }
                </div>
              </button>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
