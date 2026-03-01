
# 📺 StreamSync – Backend for Video Streaming Platform

StreamSync is a backend for a **video streaming platform** built with **Node.js, Express.js, and MongoDB**.  
It features JWT-based authentication, Cloudinary video uploads, subscriptions, comments, likes/dislikes, playlists, and aggregation pipelines.  
Designed with **MVC architecture, Swagger documentation, and Docker support**, it ensures scalability, modularity, and production-readiness for real-world applications.

---

## 📚 API Documentation

All API endpoints for **StreamSync** are documented using **Swagger (OpenAPI)** and automatically generated using `swagger-autogen`.

> You can explore the API via the interactive Swagger UI.

**🔗 Live Swagger Docs**: [View API Documentation](https://streamsync-1-imhr.onrender.com/api-docs)  

---

## 🚀 Features Implemented

The StreamSync backend powers core operations such as:

- Secure user authentication with JWT & HTTP-only cookies  
- Video uploads using **Multer + Cloudinary**  
- CRUD operations for videos, playlists, and comments  
- User subscriptions, likes, and dislikes  
- Pagination using `mongoose-aggregate-paginate-v2`  
- Rich data using MongoDB aggregation pipelines  
- Utility-based architecture for cleaner, reusable code  
- Environment-driven configuration for scalability  
- Containerized with Docker for easy setup and deployment  

Designed for scalability, reliability, and extensibility, supporting future enhancements like monetization or live streaming integration.

---

## 🧱 Tech Stack

- **Node.js + Express.js** – Backend runtime & web framework  
- **MongoDB + Mongoose** – NoSQL database with schema modeling  
- **Aggregation Pipelines** – Complex relational-like queries across collections  
- **mongoose-aggregate-paginate-v2** – Efficient pagination  
- **JWT + HTTP-only Cookies** – Secure authentication  
- **bcrypt** – Password hashing  
- **Multer + Cloudinary** – File uploads & cloud storage  
- **cors** – Cross-origin request handling  
- **dotenv** – Environment variable management  
- **Prettier** – Code formatting  
- **Swagger + swagger-autogen** – Auto-generated API docs  
- **Docker** – Containerization for consistent deployment  

---

## ✨ Core Highlights

- **Utility-Driven Architecture**: Common logic is abstracted into reusable utility functions.  
- **ApiResponse & ApiError**: Standardized success and error responses.  
- **asyncHandler**: Wraps all controllers to catch async errors and forward to global error handler.  
- **Dockerized Setup**: Containerized for easy build and deployment.  
- **MVC Folder Structure**: Clean separation of controllers, models, routes, middlewares, and utils.

---

## 📁 Project Structure

```text
StreamSync/
├── docs/ # Swagger schema files for Swagger UI
├── public/temp/ # Temporary storage for uploads
├── src/
│ ├── controllers/ # Route logic (User, Video, Playlist)
│ ├── models/ # Mongoose schemas
│ ├── routes/ # All route definitions
│ ├── middlewares/ # Auth, file uploading, etc.
│ ├── utils/ # Helper functions, API responses/errors
│ ├── db/ # MongoDB connection
│ ├── index.js # App entry point (server setup)
│ ├── app.js # Express app setup
│ └── constants.js # Global constants
├── .env # Environment variables
├── .gitignore # Git ignore rules
├── .prettierrc / .prettierignore # Prettier config
├── Dockerfile # Docker configuration
├── .dockerignore # Docker ignore rules
├── package.json # Project dependencies & scripts
├── package-lock.json # Dependency lock
└── swagger.js # Swagger configuration

```

This structure ensures:

- ✅ Clean separation of concerns  
- ✅ Easy debugging and testing  
- ✅ Scalable codebase
- ✅ One-command setup with Docker  

---
## 🐳 Docker Setup

StreamSync is fully containerized.  

**Prerequisites:**  
[Docker installed](https://docs.docker.com/get-docker/)

**Run with Docker:**

```bash
# Clone the repository
git clone https://github.com/your-username/StreamSync.git
cd StreamSync

# Create .env file
cp .env.example .env
# Fill in environment variables

# Build Docker image
docker build -t streamsync .

# Run container
docker run -p 8000:8000 --env-file .env streamsync
```

The app will be available at: http://localhost:8000

---

## Implementation Highlights

### 🔄 Authentication System
- Register/Login using secure password hashing (bcrypt)
- JWT-based authentication stored in **HTTP-only cookies**
- Auto-refresh flow (if implemented via refresh tokens)
- Middleware to protect private routes

### 🧠 MongoDB Aggregation Pipelines
- Used extensively to fetch complex data like:
  - User profile with video and playlist counts
  - Subscription list with channel info
  - Admin analytics (total users, video views, etc.)
- `$lookup`, `$match`, `$group`, `$addFields`, and `$project` stages are used to simulate joins and derive statistical insights.

### 📑 Pagination
- All large datasets (videos, playlists, user uploads) are paginated.
- Query params like `page` and `limit` control response size.
- Standardized pagination response format: `data`, `page`, `hasNextPage`, `totalCount`.

### 🎥 Video & Playlist Management
- Users can upload, update, and delete videos
- Playlists allow adding/removing videos dynamically
- Each playlist is linked to the user and videos through references
- Pagination supported for videos within a playlist

### ❤️ Likes, Dislikes & History
- Like/dislike logic prevents multiple reactions from the same user
- Video watch history maintained per user
- Optimized using `$addToSet` and `$pull` operations in MongoDB

---

## 📦 Project Complexity & Scalability

| Aspect               | Description |
|----------------------|-------------|
| 🧩 **Complexity**     | Involves relational-style joins, custom middleware pipelines, multi-layer logic, and dynamic queries. |
| 📈 **Scalability**    | Modular folder structure, stateless APIs, and MongoDB’s performance with aggregation make the project ready for large-scale deployments. |
| 🛡 **Security**       | Utilizes secure cookies, input validation, and route protection. |
| 🔧 **Maintainability**| Easy to extend due to clean file separation, utility-based architecture, and reusable controllers/middlewares. |
| 🐳 **Containerization**| Dockerized for consistent and portable deployment |

---
