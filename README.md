[![Test and Deploy to Docker Hub](https://github.com/madisonewebb/liatrio-interview-exercise/actions/workflows/actions.yml/badge.svg)](https://github.com/madisonewebb/liatrio-interview-exercise/actions/workflows/actions.yml)

# Liatrio Apprenticeship Interview Exercise

## Overview
Welcome to my Liatrio Apprenticeship Interview Exercise repository!
This repository contains a simple Node.js web application built with Express. The app exposes an HTTP API endpoint that returns a minified JSON response with my name (Madison Webb) and a timestamp.

## To-Do List
- [x] Develop API Endpoint: Create the Express route to return the JSON response.
- [x] Docker Setup: Create, write, and test the Dockerfile.
- [x] GitHub Actions Setup: Configure workflows for building, testing, and pushing the Docker image.
- [ ] Deploy to Cloud: Deploy my app to a cloud platform, most likely to Google Cloud Platform.
- [ ] Extra Credit: Implement an automated deployment workflow that triggers on changes to the main branch.

## Docker Instructions
### How to Build the Container Image
```bash
docker build -t liatrio-exercise .
```
### How to Run the Container
```bash
docker run -p 80:80 liatrio-exercise
```
