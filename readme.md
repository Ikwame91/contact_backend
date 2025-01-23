# Contact Manager API

A RESTful API backend service that allows users to manage their personal contacts. Users can register, login, and perform CRUD operations (Create, Read, Update, Delete) on their contacts securely.

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