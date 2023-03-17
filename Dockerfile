arg NODE_VERSION='18.14.0'
arg CHROME_VERSION='109.0.5414.119-1'
arg EDGE_VERSION='109.0.1518.70-1'
arg FIREFOX_VERSION='109.0.1'
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
