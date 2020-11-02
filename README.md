# AMC-API
-API for creating AMC for user.
-Tech Stack: Node.js,Express.js,MySql.

#### Project folder Structure 

├───auth
├───config
├───controllers
│   └───api
├───models
└───routes

#### Running the Project
npm start

#### Features and Steps
Create MySql database.
    GET: http://localhost:9000/api/createdb
    Now, Resave and It will get connected to database.

Create AMC table for end-user data entry
    GET: http://localhost:9000/api/createamctable

Create Admin Table for storing Admin Credentials
    GET: http://localhost:9000/api/createadmintable

User Entry for AMC record
    POST: http://localhost:9000/api/users

If user want to upgrade its AMC service by entering details in form of json object by using amc name
    PATCH: http://localhost:9000/api/users/

Admin registration by entering name,email,password
    POST: http://localhost:9000/api/admin/register

Admin Login which create jwt token for authentication , using email and password
    POST: http://localhost:9000/api/admin/login

Fetching All







    