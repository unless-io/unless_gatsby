import { graphql, useStaticQuery } from "gatsby"

const UseArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          body
          frontmatter {
            title
            order
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            badge_image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            badge_link
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(article => ({
    id: article.id,
    order: article.frontmatter.order,
    title: article.frontmatter.title,
    body: article.body,
    thumbnail: article.frontmatter.thumbnail,
    badge_image: article.frontmatter.badge_image,
    badge_link: article.frontmatter.badge_link,
  }))
}

export default UseArticles
