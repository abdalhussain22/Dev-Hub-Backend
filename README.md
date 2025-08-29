# DevHub Backend

A robust REST API backend built with Node.js, Express, and MongoDB for the DevHub platform.

## 🚀 Features

- User Authentication with JWT
- User Management (CRUD operations)
- Secure Password Hashing
- MongoDB Database Integration
- CORS Enabled
- Environment Variables Support

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- bcrypt for Password Hashing
- CORS for Cross-Origin Resource Sharing
- dotenv for Environment Variables

## 📝 API Endpoints

### Authentication
- `POST /auth/login` - User login

### User Operations
- `POST /api/v0/postUser` - Create a new user
- `GET /api/v0/getAllUser` - Get all users
- `GET /api/v0/getUser/:id` - Get specific user details
- `PUT /api/v0/updateUser/:id` - Update user information
- `DELETE /api/v0/deleteUser/:id` - Delete a user

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abdaloo/Dev-Hub-Backend.git
   cd Dev-Hub-Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   node server.js
   ```

The server will start running on http://localhost:PORT

## 🔒 Environment Variables

Make sure to set up the following environment variables in your `.env` file:

- `MONGODB_URI` - Your MongoDB connection string

## 📁 Project Structure

```
Dev-Hub-Backend/
├── config/
│   └── db.js          # Database connection setup
├── controllers/
│   └── UserControllers.js  # User operation controllers
├── models/
│   └── user.modal.js  # User data model
├── routes/
│   └── UserRouters.js # API routes
├── .env               # Environment variables
├── server.js         # Application entry point
└── package.json      # Project dependencies
```

## 🔐 Security

- Passwords are hashed using bcrypt
- JWT authentication for protected routes
- Environment variables for sensitive data
- CORS enabled for security
