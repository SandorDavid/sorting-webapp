# Sorting Webapp

A simple Webapp that utilizes my shorting algorithm implementations

## Stack

- Java 11
- Angular 8
- Postgres 11

## Known limitations & possible improvements

- Codewise
    - Due to a problem in frontend build with [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin), I couldn't use prod build to exchange environment files (JS related errors at runtime, after deployment)
    - Inability to control Java static resources, so no sophisticated redirecting methods to index.html on HTTP 404 errors 
- Misc
    - More atomic and feature related GIT commits needed + branching
    - More tests needed

## Build and deploy

- Set env variables detailed in `application.properties` at backend level 
- Run `mvn clean install` at root level
- Then run the resulting `.jar` with `java -jar backend/target/SortingWebApp.jar` at root level
