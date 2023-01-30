from node:18-bullseye-slim

run mkdir /page
workdir /page

volume /page

copy gatsby .
run apt update && apt upgrade -y
run npm install -g npm@latest && \
	npm install -g gatsby-cli

run npm ci
run which gatsby
