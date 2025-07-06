# Shaurya Softrack Backend Task

## Task 1: User Registration API

This project includes a simple REST API built with **Node.js**, **Express.js**, and **MongoDB**.  
The API provides a registration endpoint (`/api/register`) that accepts a user's **name** and **mobile number**, saves the data to a `users` collection in the database, and returns a success response with the saved user ID.

---

## 📌 API Endpoint

### POST `/api/register`

#### Request Body (JSON):
```json

## Output 
{
  "name": "John Doe",
  "mobile": "9876543210"
}

{
  "success": true,
  "message": "User registered successfully",
  "userId": "60f7c1234abc56789d123456"
}
1.Clone the Repository
git clone <your-repo-link>
cd <project-folder>

2.Install Dependencies
npm install

3.Start the Server
npm start

4.Test the API
Use Postman or cURL to send a POST request to:
http://localhost:8000/api/register
