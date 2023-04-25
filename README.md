Jobly Backend
=============

This is the backend part of Jobly, a full-stack web application that allows users to create accounts, browse job postings, and apply for jobs. Jobly is built using Node.js, Express, and interacts with a PostgreSQL database.

Installation and Setup
----------------------

To run this project on your machine, you need to have Node.js and PostgreSQL installed.

Once you have Node.js and PostgreSQL installed, follow these steps to set up the project:

1.  Clone the repository to your local machine:

    `git clone https://github.com/cenkbuker/jobly-backend.git`

2.  Navigate to the project directory:

    `cd jobly-backend`

3.  Install the dependencies:

    `npm install`

4.  Set up the database:

    -   Create a PostgreSQL database named `jobly`

    -   Create a `.env` file in the root of the project with the following content:

        arduinoCopy code

        `DATABASE_URL=postgresql://localhost/jobly`

    -   Run the database migrations:

        Copy code

        `npx knex migrate:latest`

    -   Seed the database with test data:

        arduinoCopy code

        `npx knex seed:run`

5.  Start the server:

    sqlCopy code

    `npm start`

    The server should now be running at <http://localhost:3001/>

Usage
-----

The backend server provides a RESTful API for the frontend client to interact with.

To use the API, you can send HTTP requests to the server using a tool like Postman or curl, or you can use the frontend client to interact with the API.


Credits
-------

This project was created by Cenk Buker. It is based on a project from Rithm School's Full-Stack Web Development course.

License
-------

This project is licensed under the MIT License. See the LICENSE file for more information.
