
# StreamRTC - Video Conferencing Application

StreamRTC is a real-time video conferencing application built with the MERN stack (MongoDB, Express, React, Node.js) and WebRTC. It allows users to create meetings, join via unique links, chat in real-time, and share screens.

## 🚀 Features

* **Real-time Video & Audio:** High-quality video and audio calls using WebRTC.
* **Instant Meetings:** Create a meeting and share the URL to invite others.
* **Chat System:** Integrated real-time chat during video calls.
* **Screen Sharing:** Share your screen with other participants.
* **Media Controls:** Toggle audio and video on/off during calls.
* **Authentication:** User registration and login system.
* **Responsive Design:** Built with Material UI for a modern look.

## 🛠️ Tech Stack

### Frontend
* **React.js:** UI Library
* **Material UI (MUI):** Component library for styling
* **Socket.io-client:** For real-time signaling
* **React Router:** Navigation

### Backend
* **Node.js & Express:** Server runtime and framework
* **Socket.io:** Real-time bidirectional event-based communication
* **MongoDB & Mongoose:** Database and ODM
* **Bcrypt & JWT:** Authentication and security

## ⚙️ Installation & Setup

Follow these steps to get the project running locally.

### Prerequisites
* Node.js installed
* MongoDB installed and running locally (or a MongoDB Atlas URI)

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```
### Install dependencies:

```bash

npm install
```
### Create a .env file in the backend folder and add the following variables:

```bash

PORT=8000
MONGO_URI=your_mongodb_connection_string
```
# Add any other JWT secrets or config keys used in your user controller
### Start the backend server:

```bash


npm run dev
```
### The server will typically run on http://localhost:8000 (or the port you specified).

### 2. Frontend Setup
Open a new terminal and navigate to the frontend directory:

```bash


cd frontend
```
### Install dependencies:

```bash


npm install
```
### Start the React application:

```bash

npm start
```
### The app will open at http://localhost:3000.

### 📖 Usage
* Register/Login: Create an account or log in to access the dashboard.

* Start a Meeting: Click to start a new meeting. You will be redirected to a meeting room.

* Invite Others: Copy the URL from your browser (e.g., http://localhost:3000/random-string) and send it to others.

* Join a Meeting: Paste the meeting link into your browser to join.

### Controls:

* Click the Camera icon to toggle video.

* Click the Mic icon to toggle audio.

* Click the Screen Share icon to share your screen.

* Click the Chat icon to open the message panel.

## 📂 Project Structure
```bash
root
├── backend/            # Node.js/Express Server
│   ├── src/
│   │   ├── controllers/ # Logic for sockets and users
│   │   ├── models/      # Mongoose schemas
│   │   ├── routes/      # API routes
│   │   └── index.js     # Entry point
│   └── ...
└── frontend/           # React Client
    ├── src/
    │   ├── pages/       # Views (Auth, Landing, VideoMeet)
    │   ├── styles/      # CSS modules
    │   └── App.js       # Main component
    └── ...
```


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 👤 Author

**Archita Sarkar**
* GitHub: [@ArchitaSarkar](https://github.com/ArchitaSarkar)
* LinkedIn: [Archita Sarkar](https://www.linkedin.com/in/archita-sarkar-010421308)

---
*If you found this project useful, please give it a ⭐!*
