# Stage 1: Build
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install all dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application source code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Production
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Install only production dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Copy the built files from the build stage
COPY --from=build /app/dist /app/dist

# Install Vite globally to serve the built app
RUN yarn global add vite

# Expose the port the app runs on
EXPOSE 4173

# Command to serve the application
CMD ["vite", "preview", "--host", "0.0.0.0", "--port", "4173"]
