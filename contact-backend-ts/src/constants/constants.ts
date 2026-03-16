import { FORMERR } from "node:dns";

export const ERROR_MESSAGES ={
    USER_NOT_FOUND: "User not found",
    INVALID_CREDENTIALS: "Invalid credentials",
    SERVER_ERROR: "Server error",
    CONTACT_NOT_FOUND: "Contact not found",
    UNAUTHORIZED: "Unauthorized",
    FORMERR: "Forbidden Access",

}

export const STATUS_CODES ={
    SUCCESS: 200,
    CREATED: 201,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}