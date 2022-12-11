import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"
import { A } from "../buttons"
import NavBar from "../navbar"

jest.mock("gatsby")

describe("Header", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<Header siteTitle="Default Starter" />)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})

describe("A", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<A href={"test"} text={"test url"}>Test Url</A>)
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
