# Dataiku dev challenge
What are the odds? (Dataiku developer challenge)   
https://dev.dataiku.com/dataiku-dev-challenge/

[![Build Status](https://travis-ci.com/loicbaron/dataiku.svg?token=SHigCBn6y4dJZA5A3dt6&branch=master)](https://travis-ci.com/loicbaron/dataiku)

# Frontend

## Build & Run with Docker
````
docker build . -t odds_frontend
docker run -d -p 3000:3000 odds_frontend
````

## From source
### Requirements
- node
- npm

````
npm install
````

### Tests
````
npm run test
````

### Run
````
npm start
````

## Access URL
http://localhost:3000