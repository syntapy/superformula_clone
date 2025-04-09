## 🚀 Superformula clone
A clone of superformula.com I am doing to learn React and Typescript

View it [on Vercel](https://superformula-clone.vercel.app/)

I chose Gatsby because it [seems fast](https://www.gatsbyjs.com/blog/comparing-website-performance-gatsby-vs-next-vs-nuxt/), and that seems like a pretty strong requirement for a landing page

## Contentful Setup

It interfaces to Contentful using graphql to fetch data, so you will need a Contentful account with appropriate fields in place

Why Contentful? Can't remember. I was struggling on getting something to work and landed on this, but mayber better to have the data be local

Anyways, all the graphql is in `gatsby/src/pages/index.tsx` and `gatsby/src/pages/components/navbar/index.tsx`

Most of it is defined in several instances of a Section content model, as well as one instance of a LandingPage content model that has the title

Also needs a `gatsby/.env.development` and a `gatsby/.env.production` file with `CONTENFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` defined
as well as similar definitions in Github Actions secrets or whatnot

## Usage

Content is hosted on my contentful.com account so probably you won't be able to run it at the moment

But otherwise needs Docker and Compose to run

Gatsby production server not set up yet

### start gatsby development server

First start gatsby service shell: `./bin/run_gatsby`

In service shell run `npm install` then close shell

Then start gatsby dev server with

`./bin/up_gatsby`

### start cypress tests

Start cypress service shell with

`./bin/run_cypress`

Inside shell first run `npm install` and then possibly `npm run cy:install`

End to end tests: `npm run e2e`

Audit tests: `npm run audit`
