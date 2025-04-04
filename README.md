# Task API (Node.js + Express)

## 📌 Overview
A simple in-memory RESTful API to manage tasks (to-do items) using Node.js and Express.

## 🚀 Features
- Create, Read, Update, Delete tasks
- Basic validation
- Error handling
- Pagination support

## 📂 Endpoints
| Method | Endpoint     | Description               |
|--------|--------------|---------------------------|
| GET    | /tasks       | Get all tasks             |
| GET    | /tasks/:id   | Get task by ID            |
| POST   | /tasks       | Create a new task         |
| PUT    | /tasks/:id   | Update task by ID         |
| DELETE | /tasks/:id   | Delete task by ID         |

## 📦 Setup & Run Locally
```bash
git clone <repo-url>
cd task-api
npm install
node app.js
```

## 🧪 Sample CURL
- Create:
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Express", "description":"Study routing and middleware"}'
```
- Get all:
```bash
curl http://localhost:3000/tasks
```
- Pagination:
```bash
curl http://localhost:3000/tasks?page=2&limit=2
```
- Update:
```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Task", "description":"Updated description"}'
```
- Delete:
```bash
curl -X DELETE http://localhost:3000/tasks/1
```


