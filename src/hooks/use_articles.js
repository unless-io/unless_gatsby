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
  }))
}

export default UseArticles
