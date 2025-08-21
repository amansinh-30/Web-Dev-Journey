# 🚀 Express.js Notes & Practice

This folder contains concise notes and practical examples of **Express.js**, a minimalist web framework for Node.js that simplifies server-side development.

---

## 🧠 What’s Inside?

This directory focuses on essential Express.js concepts for backend development, including:

- 🔧 **Express Setup** — Installing and initializing an Express server
- 🛣️ **Routing** — Handling different HTTP methods and URL paths
- 📄 **Middleware** — Logic that runs between request and response
- 🧱 **Serving Static Files** — Delivering HTML, CSS, images, and JS
- 🧪 **Request & Response** — Understanding how Express handles client-server communication
- ⚙️ **Basic REST API Structure** — Creating endpoints for CRUD operations

---

## 📝 Important Notes & Tips

### Express Setup

- Install with `npm install express`
- Require and initialize:
  ```js
  const express = require("express");
  const app = express();
  ```

### Define a port:

```js
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

---

### Routing

- Basic GET route:

```js
app.get("/", (req, res) => {
  res.send("Hello Coders");
});
```

- Route methods: `GET`, `POST`, `PUT`, `DELETE`

- Route parameters:

```js
app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

---

### Middleware

- Middleware functions run before the final route handler.

- Use `app.use()` to apply middleware:

```js
app.use(express.json()); // Parses incoming JSON requests
```

- You can create custom middleware:

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
```

---

### Serving Static Files

- Use built-in middleware to serve static files:

```js
app.use(express.static("public"));
```

- Place HTML, CSS, JS, images inside the public/ folder for automatic access.

---

### Request & Response

#### Access request data:

---

- Params: `req.params`

- Query: `req.query`

- Body: `req.body` (needs body-parsing middleware)

- Send responses:

```js
res.send("Text");
res.json({ message: "JSON response" });
res.status(404).send("Not found");
```

---

### Basic REST API Structure

| Method | Path         | Purpose           |
| ------ | ------------ | ----------------- |
| GET    | `/items`     | Fetch all items   |
| POST   | `/items`     | Create new item   |
| GET    | `/items/:id` | Fetch item by ID  |
| PUT    | `/items/:id` | Update item by ID |
| DELETE | `/items/:id` | Delete item by ID |

---

### 🎯 Learning Goals

- Set up and run an Express.js server
- Understand routing and middleware flow
- Build and organize RESTful API endpoints
- Use request/response methods efficiently
- Serve static files using Express

---

### 🛠️ Tools & Techniques Used

- ⚙️ Node.js with Express.js

- 🔍 Logging with middleware

- 📦 NPM for dependency management

- 🧪 Testing APIs with tools like Postman or browser

---

> 💡 “Express.js doesn’t just simplify Node.js — it gives you the power to build scalable, structured web apps fast and efficiently.”

Happy Backend Building! 🛠️🚀
