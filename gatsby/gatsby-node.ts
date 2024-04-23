import path from 'path'
import type { graphql } from "gatsby"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

export default createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const page = path.resolve('./src/templates/page.tsx');

  const result = await graphql(
    `query RootQuery {
        contentfulLandingPage(
          insight: {a: {title: {}, hashtags: {}}, b: {title: {}, hashtags: {}}}
          headerLink: {}
          headerDescription: {}
          header: {}
        ) {
          id
        }
        allFile {
          edges {
            node {
              relativePath
              prettySize
              ext
              birthTime
            }
          }
        }
      }`
  )

  if (result.errors) {
    reporter.panicOnBuild(
      'Error while running GraphQL query.',
      result.errors
    )
    return
  }

  const pages = result.data.allWpPage.nodes

  pages.forEach(page => {
    createPage({
      path: page.slug,
      component: page,
      context: {
        slug: page.slug,
      },
    })
  })
}
