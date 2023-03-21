arg NODE_VERSION='18.15.0'

### Get versions from:
### 	https://hub.docker.com/r/cypress/factory/
arg CHROME_VERSION='111.0.5563.64-1'
arg EDGE_VERSION='111.0.1661.44-1'
arg FIREFOX_VERSION='111.0'

arg CYPRESS_VERSION='12.8.1'

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
		npm install -g gatsby-cli

# Sigh...yes, I needed to do this =/
run chown -R node:node /root

user $UNAME

volume ["./gatsby"]
