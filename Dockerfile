# Use a lightweight Node.js image
FROM node:slim

# Declaring environmental variable for the app
ENV NODE_ENV=development

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY app/package.json app/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code into the container
COPY app/src ./src

# Exposing port 80 so app can be accessed externally
EXPOSE 80

# Run the application using Node.js
CMD ["node", "src/app.js"]