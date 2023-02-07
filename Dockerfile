arg NODE_VERSION='18.14.0'
arg CHROME_VERSION='109.0.5414.119-1'
arg EDGE_VERSION='109.0.1518.70-1'
arg FIREFOX_VERSION='109.0.1'
arg CYPRESS_VERSION='12.5.1'

from cypress/factory

arg UNAME=user
arg UID=1000
arg GID=1000
run groupadd -g $GID -o $UNAME
run useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME

run mkdir /site
workdir /site

run apt-get update && apt-get upgrade -y && \
		npm install -g npm@latest && \
		npm install -g gatsby-cli

user $UNAME

copy gatsby .

volume ["./gatsby"]
