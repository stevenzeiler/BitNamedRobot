docker run -it --rm \
  --link ganache \
  --env GANACHE_HOST=ganache \
  --env GANACHE_PORT=8545 \
  named-robot npm test
