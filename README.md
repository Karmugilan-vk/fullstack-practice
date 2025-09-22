# Fullstack Practice 🚀

This repository is a collection of my **JavaScript practice exercises** and a **full Express.js + MongoDB project**.  


---

## ⚙️ Features

### 🔹 JavaScript Practice
- String functions: Reverse, Palindrome, Vowel Count, Capitalize
- Array operations: Filter, Map
- ES6 Functions: Arrow Functions

### 🔹 Express + MongoDB Practice
- 🌐 RESTful APIs using Express
- 🔑 Middleware (Logger & Authentication)
- 🗄️ MongoDB Atlas database connection
- 📡 API Endpoints with CRUD operations
- ✅ Tested with Postman

---

## 📚 What I Learned

### 🔹 JavaScript Basics & Practice
- Wrote functions for:
  - **Reverse String**
  - **Palindrome Check**
  - **Vowel Count**
  - **Longest Word in a String**
  - **Capitalize Words**
- Practiced **Array Operations** like:
  - `map()`  
  - `filter()`  
- Used **ES6 Arrow Functions** to simplify code.

### 🔹 Express.js & Middleware
- Built a **Node.js + Express.js server**.
- Created **routes** for `GET`, `POST`, and `DELETE`.
- Added a **Logger Middleware** to track requests with timestamps.
- Learned to use **Controllers** for cleaner code separation.
- Implemented **Role-Based Access Control (RBAC)**:
  - `Admin` → can create, read, and delete users.
  - `Member` → can create and read users.
  - `Guest` → can only read.

### 🔹 MongoDB Atlas
- Connected **MongoDB Atlas cloud database** with Mongoose.
- Designed a **User Schema** with:
  - `userName`
  - `userId`
  - `role (Admin / Member / Guest)`
- Practiced **CRUD operations** with real data.

### 🔹 Postman API Testing
- Tested all routes with Postman:
  - **GET /user/:name**
  - **POST /user**
  - **DELETE /user/:id** (Admin only)
- Sent JSON data in POST requests:
  ```json
  {
    "userName": "Mugilan",
    "userId": "001",
    "role": "Member"
  }

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Karmugilan-vk/fullstack-practice.git
   cd fullstack-practice/express-practice


