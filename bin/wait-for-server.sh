#!/bin/bash

# Wait for a server to be up and running

# Usage: ./wait-for-server.sh <host> <port> <timeout>

host="localhost"
port=$1
timeout=120

echo "Waiting for server at $host:$port to be available..."

start_time=$(date +%s)

while [ 1 ]
do
  (echo > /dev/tcp/$host/$port) >/dev/null 2>&1
  result=$?
  if [[ $result -eq 0 ]]; then
    end_time=$(date +%s)
    echo "Server is available after $((end_time - start_time)) seconds"
    break
  fi

  if [[ $((end_time - start_time)) -gt $timeout ]]; then
    echo "Error: Server at $host:$port is not available after $timeout seconds"
    exit 1
  fi

  sleep 1
done

sleep 5
