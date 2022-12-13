/*
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import { HomeNavButton } from "../buttons"

test('test HomeNavButton', () => {
	const testMessage = 'Test Message'
	render(<HomeNavButton href={"/test"} text={testMessage} />)

	const buttonClass = HomeNavButton.name
	console.log(HomeNavButton())

	const element = screen.getByText(testMessage)
	expect(element).toBeInTheDocument()
	expect(element).toHaveAttribute('href', '/test')
	expect(element).toHaveTextContent(testMessage)
})
