#! /bin/bash

set -e

USER_ID=${LOCAL_UID:-1000}
GROUP_ID=${LOCAL_GID:-1000}

echo "Starting with UID: $USER_ID, GID: $GROUP_ID"
groupmod -g $GROUP_ID node
usermod -u $USER_ID -g $GROUP_ID node

exec "$@"
