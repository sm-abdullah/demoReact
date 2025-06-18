FROM node:20-alpine

WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Pass version information as an environment variable
ARG VERSION
ENV APP_VERSION=$VERSION

# Generate current time and set it as an environment variable
RUN export BUILD_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ") && echo "BUILD_TIME=$BUILD_TIME" > /app/build_time.env
ARG BUILD_TIME
ENV APP_BUILD_TIME=$BUILD_TIME

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server for serving the built files
FROM nginx:alpine

# Copy the build output to the Nginx web server directory
COPY --from=0 /app/build /usr/share/nginx/html



# Expose the port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]