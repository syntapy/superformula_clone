## 🚀 Superformula clone
A clone of superformula.com I am doing to learn React and Typescript

I chose Gatsby because it [seems fast](https://www.gatsbyjs.com/blog/comparing-website-performance-gatsby-vs-next-vs-nuxt/), and that seems like a pretty strong requirement for a landing page

## Contentful Setup

It interfaces to Contentful using graphql to fetch data, so you will need a Contentful account with appropriate fields in place

Why Contentful? Can't remember. I was struggling on getting something to work and landed on this, but mayber better to have the data be local

Anyways, all the graphql is in `gatsby/src/pages/index.tsx` and `gatsby/src/pages/components/navbar/index.tsx`

Most of it is defined in several instances of a Section content model, as well as one instance of a LandingPage content model that has the title

Also needs a `gatsby/.env.development` and a `gatsby/.env.production` file with `CONTENFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` defined
as well as similar definitions in Github Actions secrets or whatnot

## Usage

### start docker container

`./bin/run`

### run dev / prod server
`npm run develop`

`npm run build; npm run serve` (not yet working)

### update npm packages

`npx npm-check-updates -u` then `npm install`

### run e2e tests

`npm run e2e`

### view e2e test results (requires feh installed), probably only works on linux

`npm run e2e:view:desktop`

`npm run e2e:view:mobile`

### run accessibility tests

`npm run audit`
