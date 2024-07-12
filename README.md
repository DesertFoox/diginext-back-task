## README

# Following System API

This project implements a simple following system API using Node.js, Express, and MongoDB. The system allows users to follow and unfollow other users, and provides endpoints to retrieve follower counts and common followers between users.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DesertFoox/diginext-back-task.git
   cd diginext-back-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Ensure MongoDB is installed and running on your local machine.

4. Create a `.env` file to configure environment variables (if needed):
   ```env
   MONGO_URI=mongodb://localhost:27017/following-system
   PORT=3000
   ```

## Usage

1. Generate Swagger documentation, seed the database with sample users, and start the server:

   ```bash
   npm start
   ```

2. The server will be running on `http://localhost:3000`.

3. Access the Swagger documentation at `http://localhost:3000/api-docs`.

## API Endpoints

### Users

#### Follow a user

- **URL**: `/api/follow/:userId/:followId`
- **Method**: `POST`
- **URL Parameters**:
  - `userId`: ID of the user who wants to follow
  - `followId`: ID of the user to be followed
- **Success Response**:
  - **Code**: 200
  - **Content**: `{ message: "Followed successfully" }`
- **Error Response**:
  - **Code**: 400
  - **Content**: `{ error: "Error message" }`

#### Unfollow a user

- **URL**: `/api/unfollow/:userId/:followId`
- **Method**: `POST`
- **URL Parameters**:
  - `userId`: ID of the user who wants to unfollow
  - `followId`: ID of the user to be unfollowed
- **Success Response**:
  - **Code**: 200
  - **Content**: `{ message: "Unfollowed successfully" }`
- **Error Response**:
  - **Code**: 400
  - **Content**: `{ error: "Error message" }`

#### Get follower count

- **URL**: `/api/followers-count/:userId`
- **Method**: `GET`
- **URL Parameters**:
  - `userId`: ID of the user
- **Success Response**:
  - **Code**: 200
  - **Content**: `{ count: Number }`
- **Error Response**:
  - **Code**: 400
  - **Content**: `{ error: "Error message" }`

#### Get common followers between two users

- **URL**: `/api/common-followers/:userId1/:userId2`
- **Method**: `GET`
- **URL Parameters**:
  - `userId1`: ID of the first user
  - `userId2`: ID of the second user
- **Success Response**:
  - **Code**: 200
  - **Content**: `{ commonFollowers: Array of user objects }`
- **Error Response**:
  - **Code**: 400
  - **Content**: `{ error: "Error message" }`

## Project Structure

```
following-system
│
├── src
│   ├── controllers
│   │   └── user.controller.js
│   ├── db
│   │   ├── connectDb.js
│   │   └── seed.js
│   ├── models
│   │   └── user.js
│   ├── routes
│   │   └── api.js
│   ├── services
│   │   └── user.service.js
│   ├── server.js
│   └── swagger.js
├── .env
├── .env.sample
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── swagger-output.json
```

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Swagger (for API documentation)
- dotenv (for environment variables)
