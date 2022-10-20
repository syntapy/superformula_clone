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

import waves from "../images/sf-white-waves.svg"

import ig from "../images/sm/ig.svg"
import twitter from "../images/sm/twitter.svg"
import dribble from "../images/sm/dribble.svg"
import linkedin from "../images/sm/linkedin.svg"

import { ButtonLight, ButtonDark, ButtonSvg } from "./components/buttons"
import { Insight, Li, Ol } from "./components/info"
import { SectionBlack, SectionWhite } from "./components/section"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage = () => {
  return (
    <div>
      <Header />
      <main style={pageStyles}>
        <SectionBlack>
          <h1 style={headingStyles}>
            We can go faster and further together
          </h1>
          <p style={paragraphStyles}>
            We are digital experts driven by the passion needed to accelerate and transform your business.
          </p>
          <ButtonDark href="/services" text="Explore our services" />
        </SectionBlack>
        <SectionBlack>
          <h2>Our insights</h2>
          <div>
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
          </div>
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
          <div>
            <ButtonSvg icon={ig} alt="Our Instagram page" />
            <ButtonSvg icon={twitter} alt="Our Twitter page" />
            <ButtonSvg icon={dribble} alt="Our Dribble page" />
            <ButtonSvg icon={linkedin} alt="Our LinkedIn page" />
          </div>
        </SectionBlack>
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
