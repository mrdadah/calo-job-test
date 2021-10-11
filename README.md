
# Jobs Resolver app

## Technologies
Project is created with:

* [ExpressJs](https://expressjs.com/)
* [Local File Database](https://github.com/Belphemur/node-json-db)

## Setup & run locally
To run this project, please follow the next steps:
```
npm install
npm run dev
```
Running on port 3000

## Application Flow
1. Create job API will store a record for the job in the database with pending status, emit jobCreated event and return a response with jobId to the client 
2. An even listener for jobCreated event will be triggered, it will change job status to in progress, then fetch the image from unsplash API, store it in the public/images folder, then change job status to completed
3. Get job by Id API, once requested, will check for the requested job, fetch the status, if it's completed then will return job image from public/images/jobId.fileExtension and return the image, if the job status isn't completed then will return json with job status [pending or in progress]

### Note
- Event emitter is used to execute job resolving in the background
- Jobs images are stored in public/images/:jobId.fileExtension path, to be fetched later in GET job API

## APIs Documentation
### Create Job
Create new job with pending status and returns jobId
```
POST localhost:3000/jobs
```

### Get Job
Fetch job by jobId, if job is resolved and processed will return image else will return job status even pending or in progress
```
GET localhost:3000/jobs/:jobId
```

## Timeline
Task | Spent time (minutes)
------------ | -------------
Analyse challenge requirements | 15 
Create Github repo & Setup project | 20 
Setup file database | 10 
Implement create job API  | 20
Implement event handler functionality | 30 
Implement fetch job API  | 10
Write ReadMe | 15

## Extra resources
#### Postman Collection:
https://www.getpostman.com/collections/55e31fa12f19871ea6c0