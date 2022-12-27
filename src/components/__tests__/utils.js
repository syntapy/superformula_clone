import '@testing-library/jest-dom'
import mediaQuery from "css-mediaquery"

export const createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match("max-width", { width }),
  addListener: jest.fn(),
  removeListener: jest.fn(),
})

export const setMediaQueryMobile = (window) => {
	window.matchMedia = createMatchMedia(550)
}

export const setMediaQueryDesktop = (window) => {
	window.matchMedia = createMatchMedia(1440)
}
