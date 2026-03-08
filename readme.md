# Contact Manager API

A RESTful API backend service that allows users to manage their personal contacts. Users can register, login, and perform CRUD operations (Create, Read, Update, Delete) on their contacts securely.

## Topics Covered

This project was built to practice and demonstrate the following backend development concepts:

### 1. RESTful API Design
- Designing clean, resource-based URL structures (`/api/users`, `/api/contacts/:id`)
- Using correct HTTP verbs: `GET`, `POST`, `PUT`, `DELETE`
- Returning meaningful HTTP status codes (200, 201, 400, 401, 403, 404, 500)

### 2. Node.js & Express.js
- Setting up an Express server with `app.listen`
- Organising code into **routes**, **controllers**, **models**, and **middleware** (MVC-style architecture)
- Using `express.json()` middleware to parse incoming request bodies
- Handling asynchronous route handlers with `express-async-handler`

### 3. MongoDB & Mongoose
- Connecting to a MongoDB database using Mongoose
- Defining **schemas** and **models** for `User` and `Contact` collections
- Performing CRUD operations with Mongoose methods (`find`, `create`, `findById`, `findByIdAndUpdate`, `deleteOne`)
- Using Mongoose `ObjectId` references to link documents across collections (`user_id` on contacts)
- Leveraging automatic `timestamps` (createdAt / updatedAt) on schemas

### 4. User Authentication with JWT
- Registering users and securely storing hashed passwords
- Logging in users and issuing signed **JSON Web Tokens (JWT)**
- Setting token expiry (`expiresIn: "15m"`)
- Verifying tokens on protected routes using a custom `validateToken` middleware
- Extracting user identity from the decoded token payload

### 5. Password Security with bcrypt
- Hashing passwords before saving to the database (`bcrypt.hash`)
- Comparing plain-text passwords to stored hashes on login (`bcrypt.compare`)
- Using salt rounds to increase hash strength

### 6. Middleware
- Writing custom **authentication middleware** to protect private routes
- Writing a global **error-handling middleware** that formats errors by HTTP status code
- Applying middleware selectively (public vs. protected routes)

### 7. Environment Variables & Configuration
- Using `dotenv` to load secrets from a `.env` file
- Keeping sensitive values (database URI, JWT secret, port) out of source control via `.gitignore`

### 8. Input Validation & Error Handling
- Validating required request fields and returning `400` errors with descriptive messages
- Handling "not found" (404) and "forbidden" (403) cases consistently
- Centralising error responses through a single error-handler middleware

### 9. Authorization & Data Isolation
- Associating each contact with the logged-in user's `_id`
- Verifying ownership before allowing updates or deletes (preventing users from modifying other users' data)

### 10. Project Structure & Tooling
- Organising a Node.js project with separate `config/`, `controllers/`, `middleware/`, `models/`, and `routes/` directories
- Using **nodemon** for automatic server restarts during development
- Configuring `jsconfig.json` for improved IDE IntelliSense support

---

## Features

- User Authentication & Authorization
- JWT Token based security
- CRUD operations for contacts
- Private contact routes (each user can only access their own contacts)
- Input validation
- Password hashing for security

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Express-validator for input validation

## Installation

1. Clone the repository
```bash
git clone [your-repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server
```bash
npm start
```

## API Endpoints

### User Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/current` - Get current user info (Protected)

### Contact Routes (All Protected)
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create a new contact
- `GET /api/contacts/:id` - Get contact by ID
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact

## Usage

### Register a new user
```http
POST /api/users/register
Content-Type: application/json

{
    "username": "example",
    "email": "example@email.com",
    "password": "password123"
}
```

### Login
```http
POST /api/users/login
Content-Type: application/json

{
    "email": "example@email.com",
    "password": "password123"
}
```

### Create a contact
```http
POST /api/contacts
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@email.com",
    "phone": "1234567890"
}
```

## Error Handling

The API includes comprehensive error handling for:
- Invalid requests
- Authentication errors
- Authorization errors
- Database errors
- Validation errors

## Security Features

- Password hashing using bcrypt
- JWT for secure authentication
- Protected routes using middleware
- Input validation and sanitization
- MongoDB injection protection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details