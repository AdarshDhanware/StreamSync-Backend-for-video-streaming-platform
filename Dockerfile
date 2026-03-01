# Node image
FROM node:20-alpine

# App directry
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy the rest of the source code
COPY . .

# Expose the port
EXPOSE 10000

# start server
CMD [ "node" , "src/index.js" ]