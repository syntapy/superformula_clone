/*
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import * as styles from "../../styles/navbar.module.css"
import { HomeNavButton } from "../buttons"

test('test HomeNavButton', () => {
	const testMessage = 'Test Message'
	render(<HomeNavButton href={"/test"} text={testMessage} className={styles.homeItem}/>)

	const buttonClass = HomeNavButton.name

	const div = screen.getByText(testMessage).parentElement
	const A = div.children[0]
	expect(div.tagName).toBe('DIV')
	expect(div).toBeInTheDocument()
	expect(div).toHaveTextContent(testMessage)
	expect(A).toHaveAttribute('href', '/test')
})
