# EclipseFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Pre-requisites

- Install [Node.js](https://nodejs.org/en/download/)
- Install [Angular CLI](https://angular.io/cli) with `npm install -g @angular/cli`
- Install dependencies with `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### with backend API

- Make sure, `offline` variable is set to false in `src/environments/environment.ts`
- Set `apiUrl` variable with your local backend in `src/environments/environment.ts` (default: `http://localhost:8080`)
- Finally, make sure your backend is running on 

### with mock data

To use mock data, set `offline` variable to true in `src/environments/environment.ts`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
