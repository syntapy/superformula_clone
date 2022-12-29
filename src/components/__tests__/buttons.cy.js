import * as React from 'react'

describe('HomeNavButton', () => {
	let div
	let a
	let computedStyle
	let testMessage

	beforeEach(() => {
		testMessage = 'Test Message'
		cy.mount(<HomeNavButton href={"/test"} text={testMessage} className={styles.homeItem}/>)
		//a = screen.getByText(testMessage)
		//div = a.parentElement

		//computedStyle = window.getComputedStyle(div)
	})

	it('render <A />', () => {
		cy.get('div').should('have.class', styles.homeItem)
	})
})
