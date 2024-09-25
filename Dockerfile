arg NODE_VERSION='22.9.0'

### Get versions from:
### 	https://hub.docker.com/r/cypress/factory/
arg CHROME_VERSION='128.0.6613.137-1'
arg EDGE_VERSION='128.0.2739.79-1'
arg FIREFOX_VERSION='130.0.1'

arg CYPRESS_VERSION='13.14.2'

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
        apt install -y x11-apps feh && \
		npm install -g npm@latest && \
		npm install -g gatsby-cli && \
		npm run cy:install

# Sigh...yes, I needed to do this =/
run chown -R node:node /root

user $UNAME

volume ["./gatsby"]
