import '@testing-library/jest-dom'

import * as React from 'react'
import {render, screen} from '@testing-library/react'

import NavBar from '../navbar'

describe('menu', () => {
	beforeEach(() => {
		const { container } = render(<NavBar />)
	})

	it('should render the navbar', () => {
		//expect(screen.getById('desktop-nav')).toBeInTheDocument()
	})
})
