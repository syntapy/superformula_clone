import { graphql } from "gatsby"

export default function defineData() {
  return graphql`
    query landingPage {
      allContentfulSection(
        sort: {sort_id: ASC}
        filter: {sort_id: {lt: 9}}
      ) {
        nodes {
          title
          subtitle
          description
          imageListDesktop {
            description
            file {
              url
            }
          }
          imageMobile {
            description
            file {
              url
            }
          }
          imageSrc {
            description
            file {
              url
            }
          }
          buttonText
          itemList
          linkHref
          linkText
          tags
        }
      }
    }`
}
