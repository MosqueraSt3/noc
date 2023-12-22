# Network Operations Center (NOC) Console App

## Description
This educational console application simulates a Network Operations Center (NOC) environment. It's built using Node.js and TypeScript, implementing Clean Architecture principles. The app integrates various data sources such as MongoDB, PostgreSQL, and file storage using Node.js `fs` module. It includes Jest and Supertest for testing and email functionality for notifications.

## Key Features
- **NOC Simulation:** Emulates a simplified Network Operations Center scenario.
- **Clean Architecture:** Organizes the codebase following Clean Architecture principles for modularity and scalability.
- **Multiple Data Sources:** Utilizes MongoDB, PostgreSQL, and file storage (with `fs`) for different data storage scenarios.
- **Educational Purpose:** Ideal for learning Node.js, TypeScript, Clean Architecture concepts, testing, and email integration.

## Functionality
- **Node.js & TypeScript:** Development carried out using Node.js with TypeScript for static typing.
- **Clean Architecture Components:** Separates business logic from data sources and external dependencies.
- **MongoDB & PostgreSQL Integration:** Demonstrates interaction with both NoSQL (MongoDB) and SQL (PostgreSQL) databases.
- **File System (fs) Usage:** Includes data storage and retrieval through file handling using Node.js `fs` module.
- **Jest & Supertest:** Includes comprehensive testing with Jest and Supertest for API testing.
- **Email Notifications:** Utilizes email functionality for notifications using a suitable Node.js library.

## Usage
1. Clone this repository: `git clone https://github.com/MosqueraSt3/noc.git`
2. Install dependencies: `npm install`
3. Compile TypeScript files: `npm run build`
4. Run tests: `npm test`
5. Start the application: `npm start`

## Technologies & Dependencies
- **Node.js:** Runtime environment for executing JavaScript code.
- **TypeScript:** Superset of JavaScript for static typing.
- **Clean Architecture:** Organizes code for maintainability and scalability.
- **MongoDB & PostgreSQL:** Database management systems.
- **fs Module:** Node.js module for file system operations.
- **Jest & Supertest:** Testing frameworks for comprehensive testing.
- **Email Functionality:** Suitable Node.js library for email notifications.

## Directory Structure
- **src/:** Contains the TypeScript source code.
- **logs/:** Holds sample data files.
- **config/:** Configuration files for databases and environment variables.
- **tests/:** Includes test suites for the application.
