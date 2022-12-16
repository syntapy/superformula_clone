import '@testing-library/jest-dom'

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import * as styles from "../../styles/navbar.module.css"
import { HomeNavButton } from "../buttons"

describe('HomeNavButton', () => {
	let div
	let a
	let computedStyle
	let testMessage

	beforeEach(() => {
		testMessage = 'Test Message'
		render(<HomeNavButton href={"/test"} text={testMessage} className={styles.homeItem}/>)
		a = screen.getByText(testMessage)
		div = a.parentElement

		computedStyle = window.getComputedStyle(div)
	})

	it('render <A />', () => {
		const A = div.children[0]
		expect(A).toBeInTheDocument()
		expect(A).toHaveAttribute('href', '/test')
	})

	it('render <div />', () => {
		const div = screen.getByText(testMessage).parentElement
		expect(div).toBeInTheDocument()
	})

	it('check styles', () => {
		expect(computedStyle).toHaveProperty('margin', 'auto auto auto 0px')
	})
})
