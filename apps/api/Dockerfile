
# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 18 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
#
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/

FROM nodejs:18-alpine as builder

ENV NODE_ENV build

USER nodejs
WORKDIR /home/nodejs

COPY package*.json ./
RUN npm ci

COPY --chown=nodejs:nodejs . .
RUN npm run build \
    && npm prune --production

# ---

FROM nodejs:18-alpine

ENV NODE_ENV production

USER nodejs
WORKDIR /home/nodejs

COPY --from=builder --chown=nodejs:nodejs /home/node/package*.json ./
COPY --from=builder --chown=nodejs:nodejs /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=nodejs:nodejs /home/node/dist/ ./dist/

CMD ["nodejs", "dist/server.js"]
