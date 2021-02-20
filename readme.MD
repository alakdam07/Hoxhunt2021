# Help Sgt. Hook defeat the Phishy Phoes

## Task list

- [x] Everyone with the letter r in their last name is innocent.
- [x] Emails with the top level domain co.uk that have a letter c in their full name are criminals
- [x] Everyone from wonkaindustries or gringottsbank are criminals unless their first name is shorter than 4 characters.
- [x] Everyone with two or more of the letter t in their full name is a criminal!
- [x] the amount of criminals it returned.

# App's technological background

**Tachnology:**

- **Backend:** Node, Express server, Helmet, Morgan, Cors.
- **Frontend:** React, Typescript, React-router-dom, Redux.
- **Designing:** Styled-components

## Backlogs

- [x] **Setup Backend**
  - [x] Install dependencies
  - [x] Setup Express server
  - [x] Setup concurrently for the run frontend and backend together
  - [x] Filtered Data
  - [x] Create api end point

- [x] **Setup Frontend**
  - [x] Create React-app
  - [x] Install dependencies
  - [x] Use hooks
  - [x] React-router-dom setup
  - [x] Proxy setting
  - [x] Redux store setup
  - [x] Create Global styling
  - [x] Made resuable components
  - [x] Create custome hooks
  - [x] Fetch data
  - [x] Shows data to the browser
  - [x] Styling
  - [x] Error handaling

- [x] **Deployment**
  - [x] Deployed in [AWS-EC2](http://3.82.229.173/)
  - [x] Create Dockerfile and Docker-componse.yml
  - [x] Build docker container
  - [x] Push it Docker hub

**Install Dependencies**

```sh
$ cd backend && npm i


$ cd .. && cd app & npm i

```

**How to run app**

- **Start the app:** `cd backend && npm run dev`
- **Start backend:** `npm start`
- **Start app:** cd app & `npm start`

**To run docker container**

`docker-compose up`

```version: "3"
services:
  app:
    image: alakdam/hoxhunt_app
    ports:
      - 3000:3000
    depends_on:
      - backend

  backend:
    image: alakdam/hoxhunt_backend
    ports:
      - 8080:8080```
