#!/bin/bash

# Build the Docker image
docker build -t learning-journey .

# Run the container
docker run -p 3000:3000 learning-journey 