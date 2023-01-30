from node:18-alpine

expose 8000

run mkdir /page
workdir /page

volume /page

copy gatsby .
run apk update && apk upgrade && \
		apk add build-base
run npm install -g npm@latest && \
	npm install -g gatsby-cli

run npm ci
run which gatsby
