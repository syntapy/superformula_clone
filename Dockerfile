from node:18-alpine

run mkdir /page
workdir /page

volume /page

copy gatsby .
run npm install -g npm@latest && \
	npm install -g gatsby-cli && \
	npm ci

run which gatsby
