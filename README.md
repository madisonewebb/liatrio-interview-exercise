[![Test and Deploy to Docker Hub](https://github.com/madisonewebb/liatrio-interview-exercise/actions/workflows/actions.yml/badge.svg)](https://github.com/madisonewebb/liatrio-interview-exercise/actions/workflows/actions.yml)

[![Deploy to Production AWS EC2 Instance](https://github.com/madisonewebb/liatrio-interview-exercise/actions/workflows/deploy.yml/badge.svg)](https://github.com/madisonewebb/liatrio-interview-exercise/actions/workflows/deploy.yml)

# Liatrio Apprenticeship Interview Exercise
**Live Demo:** [http://madisonwebb.net](http://madisonwebb.net)


## Overview
Welcome to my Liatrio Apprenticeship Interview Exercise repository!
This repository contains a simple Node.js web application built with Express. The app exposes an HTTP API endpoint that returns a minified JSON response with my name (Madison Webb) and a timestamp.

## To-Do List
- [x] Develop API Endpoint: Create the Express route to return the JSON response.
- [x] Docker Setup: Create, write, and test the Dockerfile.
- [x] GitHub Actions Setup: Configure workflows for building, testing, and pushing the Docker image.
- [x] Deploy to Cloud: Deploy my app to an AWS EC2 instance.
- [x] Extra Credit: Implement an automated deployment workflow that triggers on changes to the main branch.

## Docker Instructions
### How to Build the Container Image
```bash
docker build -t liatrio-exercise .
```
### How to Run the Container
```bash
docker run -p 80:80 liatrio-exercise
```
