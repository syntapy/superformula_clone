import '@testing-library/jest-dom'
import mediaQuery from "css-mediaquery"

export const createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match("max-width", { width }),
  addListener: jest.fn(),
  removeListener: jest.fn(),
})

export const setMediaQueryMobile = (window) => {
	window.matchMedia = createMatchMedia(500)
}

export const setMediaQueryDesktop = (window) => {
	window.matchMedia = createMatchMedia(1440)
}

// Sets the window to mobile size
export const setMobile = (window) => {
  window.innerWidth = 500
  window.outerWidth = 500
  window.dispatchEvent(new Event('resize'))
}

export const getMediaQueryIsMobile = (window) => {
  return window.matchMedia('(max-width: 500px)').matches
}
