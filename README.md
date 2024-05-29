## 🚀 Superformula clone
A clone of superformula.com I am doing to learn React and Typescript

I chose Gatsby because it [seems fast](https://www.gatsbyjs.com/blog/comparing-website-performance-gatsby-vs-next-vs-nuxt/), and that seems like a pretty strong requirement for a landing page

Main thing I'm proud about on this is my unit tests of CSS styles using [jest-transform-css](https://github.com/dferber90/jest-transform-css) and which I first got working on [PR 21](https://github.com/syntapy/superformula_clone/pull/21)

## Contentful Setup

It interfaces to Contentful using graphql to fetch data, so you will need a Contentful account with appropriate fields in place

Why Contentful? Can't remember. I was struggling on getting something to work and landed on this, but mayber better to have the data be local

Anyways, all the graphql is in `gatsby/src/pages/index.tsx` and `gatsby/src/pages/components/navbar/index.tsx`

Most of it is defined in several instances of a Section content model, as well as one instance of a LandingPage content model that has the title

Also needs a `gatsby/.env.development` and a `gatsby/.env.production` file with `CONTENFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` defined
as well as similar definitions in Github Actions secrets or whatnot

## Usage

run tests `npm run test`

run dev server: `npm run develop`

run prod server: `npm run serve`
