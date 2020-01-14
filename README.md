# Sorting Webapp ([Demo](https://sorting-web-app.herokuapp.com/))

A simple Webapp that utilizes my shorting algorithm implementations

## Stack

- Java 11
- Angular 8
- Postgres 11

## Known limitations & possible improvements

- Limitations
    - When building the frontend app with [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin), I couldn't use `npm run-script prod` to exchange environment files (JS related errors at runtime, after deployment)
    - Due to the current inability to control Java static resources, no sophisticated redirecting methods exist towards index.html on HTTP 404 errors
    
- Improvements
    - More atomic and feature related GIT commits needed + branching
    - More testing needed
    - Cross-browser optimization needed

## Build and deploy

- Set env variables detailed in `application.properties` residing at backend module level
- Run `mvn clean install` at root level
- Execute the resulting `.jar` with `java -jar backend/target/SortingWebApp.jar` at root level
