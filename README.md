# TrackCarbon App

Boilerplate code for TrackCarbon MEAN stack

## Installation

Install using npm install in each directory
```bash
npm install
```

A .env file needs to be created in the backend directory for for ports and secret token used to sign and verify JWT for authentication

```.env
DB_STRING= YOUR DB STRING HERE
DB_STRING_PROD= YOUR PROD DB STRING
PORT= PORT HERE
SECRET= 32 LONG TOKEN FOR JWT
```

As well as updating the environment.ts file in the dashboard directory
```typescript
  production: false,
  apiUrl: 'http://localhost:YOUR PORT'
```

## Email
 SMTP settings also need to be configured, this can be found in the send-email.js file, currently uses https://ethereal.email/
 
 ```typescript
 host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'tyree.crooks34@ethereal.email', // generated ethereal user
            pass: 'T1Q9weYYDa9yV6NKW2' // generated ethereal password
 ```

## Running

In each directory can use 
```bash
npm start
```
or for dashboard can use the angular CLI

```bash
ng serve
```

Currently the first user to register is assigned as a Admin


## Features

Email Login and Registration with verification
Jwt Authetication with refresh tokens
Forgot and reset password services
Role based authorisation
Account management (CRUD)


## Future todo
making Google BigQuery data available via the app, could be a useful resource-
https://github.com/winwiz1/crisp-bigquery






