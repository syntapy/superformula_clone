import * as React from "react"

import Header from "../components/header"
import waves from "../images/svg/sf-white-waves.svg"

import ig from "../images/svg/ig.svg"
import twitter from "../images/svg/twitter.svg"
import dribble from "../images/svg/dribble.svg"
import linkedin from "../images/svg/linkedin.svg"

import * as styles from "../styles/index.module.css"
import * as sectionStyles from "../styles/section/index.module.css"
import * as globalStyles from "../styles/global.module.css"
import "../styles/global.css"

import { ButtonLight, ButtonDark, ButtonSvg } from "../components/buttons"
import { HeaderSection, InsightsSection, ServicesSection, CultureSection, ContactSection } from "../components/section"
import { OlSection } from "../components/section"
import { Insight } from "../components/info"
import { SectionBlack, SectionWhite } from "../components/section"

import * as utils from "../utils"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const data = graphql`
  query landingPage($id: String) {
    allContentfulSection(sort: {sort_id: ASC}) {
      nodes {
        sort_id
        section
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
          file {
            url
          }
        }
        imageAlt
        buttonText
        itemList
        linkHref
        linkText
        tags
      }
    }
    contentfulLandingPage(id: { eq: $id }) {
      title
      spaceId
      insight {
        a {
          title
          hashtags
        }
        b {
          title
          hashtags
        }
      }
      insightImages {
        file {
          url
        }
      }
      headerLink
      headerDescription
      header
    }
  }`

const IndexPage: React.FC<PageProps<PageData>> = ({data}: Queries.landingPageQuery) => {

  //console.log("DATA")
  //console.log(data)
  //console.log(data.allContentfulSection.nodes[0])
  //console.log(data.allContentfulSection.nodes[1])
  //console.log(data.allContentfulSection.nodes[2])
  //console.log(data.allContentfulSection.nodes[3])
  //console.log(data.allContentfulSection.nodes[4])
  //console.log(data.allContentfulSection.nodes[5])
  //console.log(data.allContentfulSection.nodes[6])
  //console.log(data.allContentfulSection.nodes[6].imageListDesktop[0])
  //console.log(data.allContentfulSection.nodes[7])
  //console.log(data.allContentfulSection.nodes[8])
  return (
    <div className={styles.root}>
      <Header isMobile={utils.isMobile} />
      <main>
        <SectionBlack className={sectionStyles.firstSection}>
          <HeaderSection
            title={data.allContentfulSection.nodes[0].title}
            description={data.allContentfulSection.nodes[0].description}
            href={data.allContentfulSection.nodes[0].linkHref}
            buttonText={data.allContentfulSection.nodes[0].buttonText}
          />
        </SectionBlack>
        <SectionBlack>
          <InsightsSection title={data.allContentfulSection.nodes[1].title}>
            <Insight 
              title={data.allContentfulSection.nodes[2].title}
              href={data.allContentfulSection.nodes[2].linkHref}
              src={data.allContentfulSection.nodes[2].imageSrc.file.url}
              dataCy="insight-img-a"
              tags={data.allContentfulSection.nodes[2].tags}
            />
            <Insight 
              title={data.allContentfulSection.nodes[3].title}
              href={data.allContentfulSection.nodes[3].linkHref}
              src={data.allContentfulSection.nodes[3].imageSrc.file.url}
              dataCy="insight-img-b"
              tags={data.allContentfulSection.nodes[3].tags}
            />
          </InsightsSection>
        </SectionBlack>
        <SectionBlack>
          <OlSection
            title={data.allContentfulSection.nodes[4].title}
            items={data.allContentfulSection.nodes[4].itemList}
          />
        </SectionBlack>
        <SectionWhite>
          <ServicesSection
            title={data.allContentfulSection.nodes[5].title}
            subtitle={data.allContentfulSection.nodes[5].subtitle}
            description={data.allContentfulSection.nodes[5].description}
            src={data.allContentfulSection.nodes[5].imageSrc.file.url} alt={data.allContentfulSection.nodes[5].imageAlt}
            href={data.allContentfulSection.nodes[5].linkHref} buttonText={data.allContentfulSection.nodes[5].buttonText}
          />
        </SectionWhite>
        <SectionWhite>
          <CultureSection
            title={data.allContentfulSection.nodes[6].title}
            subtitle={data.allContentfulSection.nodes[6].subtitle}
            description={data.allContentfulSection.nodes[6].description}
            href={data.allContentfulSection.nodes[6].linkHref} text={data.allContentfulSection.nodes[6].linkText}
            imgListDesktop={[
              {
                src: {data.allContentfulSection.nodes[6].imageListDesktop[0].file.url},
                alt: {data.allContentfulSection.nodes[6].imageListDesktop[0].description}
              },
              {
                src: {data.allContentfulSection.nodes[6].imageListDesktop[1].file.url},
                alt: {data.allContentfulSection.nodes[6].imageListDesktop[1].description}
              },
              {
                src: {data.allContentfulSection.nodes[6].imageListDesktop[2].file.url},
                alt: {data.allContentfulSection.nodes[6].imageListDesktop[2].description}
              },
              {
                src: {data.allContentfulSection.nodes[6].imageListDesktop[3].file.url},
                alt: {data.allContentfulSection.nodes[6].imageListDesktop[3].description}
              },
            ]}
            imgMobile={{
              src: {data.allContentfulSection.nodes[6].imageMobile.file.url},
              alt: {data.allContentfulSection.nodes[6].imageMobile.description}}}
            isMobile={utils.isMobile}
          />
        </SectionWhite>
        <SectionBlack>
          <ContactSection
            title={data.allContentfulSection.nodes[7].title}
            href={data.allContentfulSection.nodes[7].linkHref}
            text={data.allContentfulSection.nodes[7].linkText}
          />
        </SectionBlack>
      </main>
    </div>
  )
}

export default IndexPage
//export const Head: HeadFC = () => <title>Home Page</title>
