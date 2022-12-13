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

	const element = screen.getByText(testMessage)
	expect(element).toBeInTheDocument()
	expect(element).toHaveAttribute('href', '/test')
	expect(element).toHaveTextContent(testMessage)
})
