import * as React from "react"
import useIsMounted from "../hooks/use_is_mounted"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const isMounted = useIsMounted()

  return (
    <Layout>
      <Seo title="About" />
      <div
        style={{
          marginBottom: `1.45rem`,
          minHeight: `300px`,
          width: `100%`,
          maxWidth: `800px`,
        }}
      >
        <h1>About</h1>
        <figure className="side-image">
          <StaticImage
            src="../images/lars.jpg"
            quality={95}
            width={200}
            formats={["auto", "webp", "avif"]}
            alt="Profile picture of Lars Böhm"
            className={isMounted ? "slideIn" : ""}
            style={{
              borderRadius: `5px`,
              boxShadow: `2px 1px 3px rgba(1,1,1,0.2)`,
            }}
          />
          <figcaption>
            <a
              href="mailto:lars@unless.io"
              style={{
                display: `block`,
                padding: `5px`,
                width: `100%`,
                textAlign: `center`,
                boxSizing: `border-box`,
                marginTop: `5px`,
                color: `var(--link)`,
                transition: `color 400ms ease`,
              }}
            >
              lars@unless.io
            </a>
          </figcaption>
        </figure>
        <p>
          Unless started in 2016 as a collaboration between Lars Böhm and
          Michéle de Bruyn, after working together as teachers at the coding
          bootcamp Le Wagon. 
        </p>
        <p>
          Teaching, coaching and participating in the coding community has
          continuously been a driving force behind Unless. In order to better
          coach starting projects we keep up to date on a large variety of
          topics. Including, but not limited to: UX design, branding, software
          development, growth marketing and animation.
        </p>
        <p>
          Unless has participated in teaching over <strong className="shiny">400</strong> students in topics
          ranging from: beginner programming, frontend development, design and
          growth marketing. We've coached <strong className="shiny">100+</strong> projects and started dozens
          ourselves and with clients.
        </p>
        <p>
          When developing websites we use a variety of tech stacks, among which:
          Ruby/Rails, Ruby/Middleman, React/Gatsby, Vue/Nuxt.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
