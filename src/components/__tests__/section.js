import '@testing-library/jest-dom'

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import * as utilStyles from '../../styles/utils.module.css'
import { ServicesSection, CultureSection } from '../section'
import img_c from '../images/img_c.png'

import team1 from "../images/team/team1.png"
import team2 from "../images/team/team2.png"
import team3 from "../images/team/team3.png"
import team4 from "../images/team/team4.png"
import team_img from "../images/team/team_img.png"

describe('services section', () => {

	let root_div
	let computedStyle

	beforeEach(() => {
		const { container } = render(
			<ServicesSection
				title="Services"
				subtitle="Experts"
				description="Test description"
				src={img_c} alt="Test alt"
				href="/test"
			/>)

		root_div = container.children[0]
		computedStyle = window.getComputedStyle(root_div)
	})

	it('root CSS', () => {
		expect(computedStyle).toHaveProperty('display', 'flex')
		expect(computedStyle).toHaveProperty('flex-direction', 'row')
		expect(computedStyle).toHaveProperty('justify-content', 'space-between')
		expect(computedStyle).toHaveProperty('visibility', 'visible')
	})

	it('img CSS', () => {
		const img = root_div.children[1]
		let imgStyle = window.getComputedStyle(img)
		expect(img).toBeInTheDocument()

		// TODO check img src attrbute
		//expect(img).toHaveAttribute('src', img_c)
		expect(img).toHaveAttribute('alt', 'Test alt')
		expect(imgStyle).toHaveProperty('width', '100%')
		expect(imgStyle).toHaveProperty('max-width', '550px')
		expect(imgStyle).toHaveProperty('margin', '0px auto')
		expect(imgStyle).toHaveProperty('padding', '0px 1rem')
	})
})

const isMobileFalse = jest.fn(() => false)
const isMobileTrue = jest.fn(() => true)

describe('culture section', () => {

	let h3
	let h5
	let p

	beforeEach(() => {
		const { container } = render(
          <CultureSection
						key="666"
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
            isMobile={isMobileFalse}
          />)
	})

	it('culture section', () => {
	})

})
