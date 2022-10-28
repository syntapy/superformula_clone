import * as React from "react"
import type { HeadFC } from "gatsby"

import Header from "./header"
import img_a from "../images/img_a.png"
import img_b from "../images/img_b.png"
import img_c from "../images/img_c.png"

import team1 from "../images/team/team1.png"
import team2 from "../images/team/team2.png"
import team3 from "../images/team/team3.png"
import team4 from "../images/team/team4.png"

import waves from "../images/svg/sf-white-waves.svg"

import ig from "../images/svg/ig.svg"
import twitter from "../images/svg/twitter.svg"
import dribble from "../images/svg/dribble.svg"
import linkedin from "../images/svg/linkedin.svg"

import * as styles from "./styles/index.module.css"

import { ButtonLight, ButtonDark, ButtonSvg } from "./components/buttons"
import { HeaderSection, InsightsSection } from "./components/info"
import { Insight, Li, Ol } from "./components/info"
import { SectionBlack, SectionWhite } from "./components/section"

const IndexPage = () => {
  return (
    <div className={styles.root}>
      <Header />
      <main>
        <SectionBlack>
          <HeaderSection
            title="We can go faster and further together"
            description="We are digital experts driven by the passion needed to accelerate and transform your business."
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
              tags={["experience", "culture"]}
            />
            <Insight 
              title="Save time! Optimizing rebuilds With Flutter" 
              href="/articles/optimizing-rebuilds-with-flutter"
              src={img_b}
              tags={["flutter", "dart", "tips"]}
            />
          </InsightsSection>
        </SectionBlack>
        <SectionBlack>
          <h3>How we do it</h3>
          <Ol>
            <Li>Expertise (not ego) in all things digital</Li>
            <Li>Next-level creative problem solving (no smoke and mirrors here)</Li>
            <Li>Design thinking and digital tools to build know-how and skill</Li>
            <Li>Process improvements that are a no-brainer to implement</Li>
            <Li>Fully remote company culture, totally dialed infrastructure</Li>
          </Ol>
        </SectionBlack>
        <SectionWhite>
          <h4>Services</h4>
          <h5>Flutter Experts</h5>
          <p>With major releases under our belt, we've got the know-how needed to deliver premium experiences for our clients and their users.</p>
          <img src={img_c} alt="Flutter Experts" />
          <ButtonLight href="/services" text="Learn more" />
        </SectionWhite>
        <SectionWhite>
          <h3>100% remote and loving it</h3>
          <h5>Collaborative, diverse, and really, really good at what we do.</h5>
          <p>Because we’re a team of passionate problem solvers doing work we love in a way that works, in every respect. In other words, low-ego, high-drive—and it makes all the difference.</p>
          <ButtonLight href="https://careers.superformula.com/culture-values" text="Explore our culture" />
          <img src={team1} alt="Team 1" />
          <img src={team2} alt="Team 2" />
          <img src={team3} alt="Team 3" />
          <img src={team4} alt="Team 4" />
          <img src={waves} />
        </SectionWhite>
        <SectionBlack>
          <p>Whether it’s our services that speak to you or joining our team seems like a dream come true, get in touch, or follow along on all our digital adventures.</p>
          <ButtonDark href="https://superformula.com/contact" text="Contact us" />
        </SectionBlack>
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
