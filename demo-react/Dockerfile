FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Start the application using serve
CMD ["serve", "-s", "build"]