// Creating a user 
export interface User {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String
}

// User signing in
export interface UserLogin {
    email: String,
    password: String

}