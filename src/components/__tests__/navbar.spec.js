import '@testing-library/jest-dom'

import * as React from 'react'
import {render, screen} from '@testing-library/react'

import GobFush from '../navbar'

describe('menu', () => {
	beforeEach(() => {
		const { container } = render(<GobFush />)
	})

	it('should render the navbar', () => {
		//expect(screen.getById('desktop-nav')).toBeInTheDocument()
	})
})
