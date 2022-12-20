import '@testing-library/jest-dom'

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import * as utilStyles from '../../styles/utils.module.css'
import * as sectionStyles from "../../styles/section.module.css"
import { ServicesSection, CultureSection } from '../section'
import img_c from '../images/img_c.png'

import { getCultureSection } from './section_utils'

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

describe('culture section desktop', () => {
	let h3
	let h5
	let p
	let imgs
	let img_divs

	beforeEach(() => {
		const { container } = render(getCultureSection(isMobileFalse))
			h3 = container.querySelector('h3')
			h5 = container.querySelector('h5')
			p = container.querySelector('p')
			imgs = container.querySelectorAll('img')
			img_divs = []
			for (let i = 0; i < imgs.length; i++) {
				img_divs.push(imgs[i].parentElement)
			}
	})

	it('content', () => {
		expect(h3).toHaveTextContent('100% remote and loving it')
		expect(h5).toHaveTextContent('Collaborative, diverse, and really, really good at what we do')
		expect(p).toHaveTextContent('Because we’re a team of passionate problem solvers doing work we love in a way that works, in every respect. In other words, low-ego, high-drive—and it makes all the difference')
		expect(img_divs.length).toBe(4)
		expect(imgs.length).toBe(4)
		expect(imgs[0]).toHaveAttribute('src', './team1')
	})

	it('CSS', () => {
		const width_list = ['20rem', '20rem', '30rem', '20rem']
		const imgStylesList = [sectionStyles.img0, sectionStyles.img1, sectionStyles.img2, sectionStyles.img3]
		for (let i = 0; i < img_divs.length; i++) {
			let img_div = img_divs[i]
			let img = imgs[i]
			expect(img_div).toHaveClass(utilStyles.auxItemWrapper)
			expect(img).toHaveClass(imgStylesList[i])
			let img_style = window.getComputedStyle(img)
			expect(img_style).toHaveProperty('height', 'auto')
			expect(img_style).toHaveProperty('width', width_list[i])
			expect(img_style).toHaveProperty('margin', '0px auto')
		}
	})
})
