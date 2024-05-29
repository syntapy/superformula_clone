arg NODE_VERSION='22.2.0'

### Get versions from:
### 	https://hub.docker.com/r/cypress/factory/
arg CHROME_VERSION='117.0.5938.92-1'
arg EDGE_VERSION='117.0.2045.40-1'
arg FIREFOX_VERSION='117.0.1'

arg CYPRESS_VERSION='13.2.0'

from cypress/factory

env UID=1000
env GID=1000
env UNAME=node

run groupadd -g $GID -o user
#run useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME

run mkdir /site
workdir /site

copy gatsby .

run apt-get update && apt-get upgrade -y && \
		npm install -g npm@latest && \
		npm install -g gatsby-cli && \
		npm run cy:install

# Sigh...yes, I needed to do this =/
run chown -R node:node /root

user $UNAME

volume ["./gatsby"]
