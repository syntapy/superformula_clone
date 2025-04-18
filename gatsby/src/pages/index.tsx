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

import { CultureSection, ContactSection } from "../components/section/index.ts"
import { HeaderSection, InsightsSection, ServicesSection } from "../components/section/index.ts"
import { OlSection } from "../components/section/index.ts"
import { Insight } from "../components/info"
import { SectionBlack, SectionWhite } from "../components/section/index.ts"

import * as utils from "../utils"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const data = graphql`
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

const IndexPage: React.FC<PageProps<PageData>> = ({data}: Queries.landingPageQuery) => {
  return (
    <div className={styles.root}>
      <Header />
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
              alt={data.allContentfulSection.nodes[2].imageSrc.description}
              dataCy="insight-img-a"
              tags={data.allContentfulSection.nodes[2].tags}
            />
            <Insight 
              title={data.allContentfulSection.nodes[3].title}
              href={data.allContentfulSection.nodes[3].linkHref}
              src={data.allContentfulSection.nodes[3].imageSrc.file.url}
              alt={data.allContentfulSection.nodes[3].imageSrc.description}
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
            src={data.allContentfulSection.nodes[5].imageSrc.file.url}
            alt={data.allContentfulSection.nodes[5].imageSrc.description}
            href={data.allContentfulSection.nodes[5].linkHref}
            buttonText={data.allContentfulSection.nodes[5].buttonText}
          />
        </SectionWhite>
        <SectionWhite>
          <CultureSection
            title={data.allContentfulSection.nodes[6].title}
            subtitle={data.allContentfulSection.nodes[6].subtitle}
            description={data.allContentfulSection.nodes[6].description}
            href={data.allContentfulSection.nodes[6].linkHref}
            text={data.allContentfulSection.nodes[6].linkText}
            imgListDesktop={[
              {
                src: data.allContentfulSection.nodes[6].imageListDesktop[0].file.url,
                alt: data.allContentfulSection.nodes[6].imageListDesktop[0].description
              },
              {
                src: data.allContentfulSection.nodes[6].imageListDesktop[1].file.url,
                alt: data.allContentfulSection.nodes[6].imageListDesktop[1].description
              },
              {
                src: data.allContentfulSection.nodes[6].imageListDesktop[2].file.url,
                alt: data.allContentfulSection.nodes[6].imageListDesktop[2].description
              },
              {
                src: data.allContentfulSection.nodes[6].imageListDesktop[3].file.url,
                alt: data.allContentfulSection.nodes[6].imageListDesktop[3].description
              }
            ]}
            imgMobile={{
              src: data.allContentfulSection.nodes[6].imageMobile.file.url,
              alt: data.allContentfulSection.nodes[6].imageMobile.description
            }}
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
export const Head: HeadFC = () => <title>Home Page</title>
