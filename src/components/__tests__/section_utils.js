import * as React from 'react'
import { ServicesSection, CultureSection } from '../section'

import team1 from "../images/team/team1.png"
import team2 from "../images/team/team2.png"
import team3 from "../images/team/team3.png"
import team4 from "../images/team/team4.png"
import team_img from "../images/team/team_img.png"

export function getCultureSection(isMobile) {
  return <CultureSection
              title="100% remote and loving it"
              subtitle="Collaborative, diverse, and really, really good at what we do"
              description="Because we’re a team of passionate problem solvers doing work we love in a way that works, in every respect. In other words, low-ego, high-drive—and it makes all the difference"
              href="https://careers.superformula.com/culture-values" text="Explore our culture"
              imgListDesktop={[
                {src: "./team1", alt: "Team 1"},
                {src: "./team2", alt: "Team 2"},
                {src: "./team3", alt: "Team 3"},
                {src: "./team4", alt: "Team 4"},
              ]}
              imgMobile={{src: team_img, alt: "Team"}}
              isMobile={isMobile}
            />
}
