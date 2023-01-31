from node:18-alpine

run mkdir /site
workdir /site

copy gatsby .
run apk update && apk upgrade && \
		npm install -g npm@latest && \
		npm install -g gatsby-cli
run npm ci && npm run build
