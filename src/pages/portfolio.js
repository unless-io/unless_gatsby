import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "gatsby-image"

import useIsMounted from "../hooks/use_is_mounted"
import UseArticles from "../hooks/use_articles"

const IndexPage = () => {
  const isMounted = useIsMounted()

  const handleHighlight = event => {
    event.preventDefault()
    event.currentTarget.classList.toggle("active")
  }

  return (
    <Layout>
      <Seo title="About" />
      <div
        style={{
          marginBottom: `1.45rem`,
          width: `100%`,
        }}
      >
        <h1>Portfolio</h1>
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
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus officia harum omnis, nemo porro alias suscipit
                    saepe! Modi beatae necessitatibus ad! Placeat maiores
                    recusandae nesciunt ipsum ut, ipsam nam aperiam adipisci
                    quo. Perferendis numquam, ea architecto omnis mollitia
                    reiciendis. Dolorem quisquam commodi amet, dolore quae porro
                    neque nostrum at, beatae expedita minus quas nisi ipsam
                    repudiandae nobis sunt cumque culpa aliquam maiores tempore
                    velit quod? Atque similique molestias exercitationem odit
                    quidem error iure praesentium, aspernatur repellendus
                    pariatur sit ratione laudantium delectus consectetur odio
                    dignissimos. Magnam quae ipsum exercitationem, ducimus
                    dolore qui. Incidunt quia, explicabo voluptatem error nobis
                    qui in eveniet.
                  </p>
                </div>
              </button>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
