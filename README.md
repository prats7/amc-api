# AMC-API
-API for creating AMC for user.<br/>
-Tech Stack: Node.js,Express.js,MySql.<br/>

#### Project folder Structure 
<br/>
├───auth<br/>
├───config<br/>
├───controllers<br/>
│   └───api<br/>
├───models<br/>
└───routes<br/>

#### Running the Project
<br/>
npm start<br/>

#### Features and Steps
<br/>
Create MySql database.<br/>
    GET: http://localhost:9000/api/createdb<br/>
    Now, Resave and It will get connected to database.<br/>

Create AMC table for end-user data entry<br/>
    GET: http://localhost:9000/api/createamctable<br/>

Create Admin Table for storing Admin Credentials<br/>
    GET: http://localhost:9000/api/createadmintable<br/>

User Entry for AMC record<br/>
    POST: http://localhost:9000/api/users<br/>

If user want to upgrade its AMC service by entering details in form of json object by using amc name<br/>
    PATCH: http://localhost:9000/api/users/<br/>

Admin registration by entering name,email,password<br/>
    POST: http://localhost:9000/api/admin/register<br/>

Admin Login which create jwt token for authentication , using email and password<br/>
    POST: http://localhost:9000/api/admin/login<br/>

Fetching All user AMC data by Admin using JWT authentication<br/>
    GET: http://localhost:9000/api/users<br/>

Creating AMC by Admin using JWT authentication<br/>
    GET: http://localhost:9000/api/invoice/:amc_name<br/>









    