import '@testing-library/jest-dom'

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import * as utilStyles from '../../styles/utils.module.css'
import { ServicesSection } from '../section'
import img_c from '../images/img_c.png'

describe('HomeNavButton', () => {

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
