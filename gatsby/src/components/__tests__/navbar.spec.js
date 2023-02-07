import '@testing-library/jest-dom'

import * as React from 'react'
import {render, screen} from '@testing-library/react'

import NavBar from '../navbar'

import {setMediaQueryMobile, setMediaQueryDesktop} from './utils'
import {setMobile} from './utils'

const isMobileFalse = jest.fn(() => false)
const isMobileTrue = jest.fn(() => true)

describe('desktop navbar', () => {
	let desktopNavBar
	let mobileNavBar

	beforeEach(() => {
		setMediaQueryDesktop(window)
		//console.log(window)
		//console.log(getMediaQueryIsDesktop(window))
		//console.log(window.matchMedia('(max-width: 678px)').matches)
		const rendered = render(<NavBar isMobile={isMobileFalse} />)
		const container = rendered.container
		desktopNavBar = container.querySelector('#desktop-nav-wrapper')
		mobileNavBar = container.querySelector('#mobile-nav')
	})

	it('desktop navbar exists', () => {
		expect(desktopNavBar).toBeInTheDocument()
	})

	it('mobile navbar exists', () => {
		expect(mobileNavBar).toBeInTheDocument()
	})

	it('desktop navbar IS visible', () => {
		const style = window.getComputedStyle(desktopNavBar)
		expect(style.display).toBe('block')
		expect(desktopNavBar).toBeVisible()
	})

	it('mobile navbar is NOT visible', () => {
		const style = window.getComputedStyle(mobileNavBar)
		expect(style.display).toBe('none')
		expect(mobileNavBar).not.toBeVisible()
	})
})

describe('mobile navbar', () => {
	let desktopNavBar
	let mobileNavBar

	beforeAll(() => {
		setMobile(window)
		setMediaQueryMobile(window)
	})

	beforeEach(() => {
		//setMediaQueryMobile(window)
		const rendered = render(<NavBar isMobile={isMobileTrue} />)
		const container = rendered.container
		desktopNavBar = container.querySelector('#desktop-nav-wrapper')
		mobileNavBar = container.querySelector('#mobile-nav')
	})

	it('desktop navbar exists', () => {
		console.log(window.innerWidth)
		expect(desktopNavBar).toBeInTheDocument()
	})

	it('mobile navbar exists', () => {
		expect(mobileNavBar).toBeInTheDocument()
	})

	it('desktop navbar is NOT visible', () => {
		const style = window.getComputedStyle(desktopNavBar)
		expect(style.display).toBe('none')
		expect(desktopNavBar).not.toBeVisible()
	})

	it('mobile navbar is NOT visible before click', () => {
		const style = window.getComputedStyle(mobileNavBar)
		expect(style.display).toBe('flex')
		expect(style.visibility).toBe('hidden')
		expect(style.bottom).toBe('100%')
		expect(mobileNavBar).not.toBeVisible()
	})
})
