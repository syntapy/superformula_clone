import * as React from "react"

import Header from "../components/header"
import img_a from "../images/img_a.png"
import img_b from "../images/img_b.png"
import img_c from "../images/img_c.png"

import team1 from "../images/team/team1.png"
import team2 from "../images/team/team2.png"
import team3 from "../images/team/team3.png"
import team4 from "../images/team/team4.png"
import team_img from "../images/team/team_img.png"

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
import { graphql, useStaticQuery, HeadFC } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query LandingPageQuery {
      contentfulLandingPage {
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
        headerLink
        headerDescription
        header
      }
    }
  `)
  //const data = useStaticQuery(graphql`
  //  query contentfulLandingPage {
  //    title
  //  }
  //`)

  console.log(data)

  return (
    <div className={styles.root}>
      <Header isMobile={utils.isMobile} />
      <main>
        <SectionBlack className={sectionStyles.firstSection}>
          <HeaderSection
            title={data.contentfulLandingPage.header}
            description={data.contentfulLandingPage.headerDescription}
            href="/services"
            buttonText="Explore our services"
          />
        </SectionBlack>
        <SectionBlack>
          <InsightsSection title="Our Insights">
            <Insight 
              title="Opportunities: How Superformula team members step up" 
              href="/articles/unexpected-opportunities-how-superformula-team-members-step-up"
              src={img_a}
              dataCy="insight-img-a"
              tags={["experience", "culture"]}
            />
            <Insight 
              title="Save time! Optimizing rebuilds With Flutter" 
              href="/articles/optimizing-rebuilds-with-flutter"
              src={img_b}
              dataCy="insight-img-b"
              tags={["flutter", "dart", "tips"]}
            />
          </InsightsSection>
        </SectionBlack>
        <SectionBlack>
          <OlSection
            title="How we do it"
            items={[
              "Expertise (not ego) in all things digital",
              "Next-level creative problem solving (no smoke and mirrors here)",
              "Design thinking and digital tools to build know-how and skill",
              "Process improvements that are a no-brainer to implement",
              "Fully remote company culture, totally dialed infrastructure",
            ]}
          />
        </SectionBlack>
        <SectionWhite>
          <ServicesSection
            title="Services"
            subtitle="Flutter Experts"
            description="With major releases under our belt, we've got the know-how needed to deliver premium experiences for our clients and their users."
            src={img_c} alt="Flutter Experts"
            href="/services" buttonText="Learn more"
          />
        </SectionWhite>
        <SectionWhite>
          <CultureSection
            title="100% remote and loving it"
            subtitle="Collaborative, diverse, and really, really good at what we do"
            description="Because we’re a team of passionate problem solvers doing work we love in a way that works, in every respect. In other words, low-ego, high-drive—and it makes all the difference"
            href="https://careers.superformula.com/culture-values" text="Explore our culture"
            imgListDesktop={[
              {src: team1, alt: "Team 1"},
              {src: team2, alt: "Team 2"},
              {src: team3, alt: "Team 3"},
              {src: team4, alt: "Team 4"},
            ]}
            imgMobile={{src: team_img, alt: "Team"}}
            isMobile={utils.isMobile}
          />
        </SectionWhite>
        <SectionBlack>
          <ContactSection
            title="Whether it’s our services that speak to you or joining our team seems like a dream come true, get in touch, or follow along on all our digital adventures"
            href="https://superformula.com/contact" text="Contact us"
          />
        </SectionBlack>
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
