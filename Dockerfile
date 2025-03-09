# Fetching the minified node image on alpine linux
FROM node:slim

# Declaring env
ENV NODE_ENV=development

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY app/package.json app/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY app/src ./src

# Exposing server port
EXPOSE 3000

# Start the application
CMD ["node", "src/app.js"]