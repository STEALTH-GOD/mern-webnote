# 📝 WebNotes - MERN Stack Notes Application

A full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a modern UI with DaisyUI and Tailwind CSS.

🔗 **Live Demo:** [https://mern-webnote.onrender.com/](https://mern-webnote.onrender.com/)

## ✨ Features

- 📝 Create, read, update, and delete notes
- 🎨 Modern and responsive UI with DaisyUI components
- 🔒 Rate limiting with Upstash Redis
- ⚡ Real-time updates without page refresh
- 🌓 Beautiful gradient background with grid pattern
- 📱 Mobile-friendly responsive design
- 🔄 Smooth animations and transitions
- 🎯 Toast notifications for user feedback

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **Upstash Redis** - Rate limiting
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
mern/
├── backend/
│   ├── .env
│   ├── package.json
│   ├── config/
│   │   ├── db.js
│   │   └── upstash.js
│   └── src/
│       ├── server.js
│       ├── controllers/
│       │   └── notesController.js
│       ├── middleware/
│       │   └── rateLimiter.js
│       ├── models/
│       │   └── Note.js
│       └── routes/
│           └── notesRoutes.js
│
└── frontend/
    ├── package.json
    ├── tailwind.config.js
    ├── vite.config.js
    ├── public/
    │   └── logo.png
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        ├── components/
        │   ├── Navbar.jsx
        │   ├── NoteCard.jsx
        │   ├── NotesNotFound.jsx
        │   └── RateLimitedUI.jsx
        ├── lib/
        │   ├── axios.js
        │   └── utils.js
        └── pages/
            ├── CreatePage.jsx
            ├── HomePage.jsx
            └── NoteDetailPage.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.15.1 or higher)
- MongoDB database
- Upstash Redis account (for rate limiting)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/mern-webnote.git
cd mern-webnote
```

2. **Backend Setup**
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URL=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
PORT=5001
NODE_ENV=development
```

3. **Frontend Setup**
```bash
cd ../frontend
npm install
```

### Running Locally

1. **Start the backend server**
```bash
cd backend
npm run dev
```

2. **Start the frontend development server**
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

## 🌐 Deployment on Render

This application is deployed on [Render](https://render.com/) and is live at [https://mern-webnote.onrender.com/](https://mern-webnote.onrender.com/)

### Deployment Steps:

1. **Push your code to GitHub**

2. **Create a Web Service on Render**
   - Connect your GitHub repository
   - Select the `backend` directory as the root directory
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

3. **Set Environment Variables on Render**
   - `MONGO_URL` - Your MongoDB connection string
   - `UPSTASH_REDIS_REST_URL` - Upstash Redis URL
   - `UPSTASH_REDIS_REST_TOKEN` - Upstash Redis token
   - `NODE_ENV` - Set to `production`
   - `PORT` - Render will set this automatically

4. **Deploy**
   - Render will automatically build and deploy your application
   - The build process includes building the React frontend and serving it through Express

### Build Script
The backend `package.json` includes a build script that automatically builds the frontend:
```json
"scripts": {
  "build": "cd ../frontend && npm install && npm run build",
  "start": "node src/server.js"
}
```

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a single note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## 🎨 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Create Note
![Create Note](screenshots/create.png)

### Edit Note
![Edit Note](screenshots/edit.png)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- DaisyUI for the beautiful UI components
- Upstash for Redis rate limiting
- Render for hosting

---

⭐ Star this repo if you find it helpful!