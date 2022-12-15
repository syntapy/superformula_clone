import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"
import { HomeNavButton } from "../buttons"
import NavBar from "../navbar"

describe("Header", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<Header siteTitle="Default Starter" />)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})

describe("HomeNavButton", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<HomeNavButton href={"test"} text={"test url"}>Test Url</HomeNavButton>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})

describe("NavBar", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<NavBar />)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
