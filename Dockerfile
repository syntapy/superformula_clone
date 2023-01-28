from node:18-alpine

run mkdir /page
workdir /page

volume /page

copy gatsby .
run npm install -g npm@latest gatsby-cli && \
	npm ci && \
	npm run build