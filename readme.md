# DockLab

A real-time collaborative code editor built with modern web technologies. DockLab enables multiple users to edit the same document simultaneously while synchronizing editor content and user presence in real time.

## Tech Stack

<p align="left">
  <img src="https://skillicons.dev/icons?i=react,vite,js,nodejs,express,socketio,tailwind,git" />
</p>

**Additional Libraries**

* Monaco Editor
* Yjs
* y-monaco
* y-socket.io
* DiceBear

---

## Features

* Real-time collaborative editing
* Live user presence using Yjs Awareness
* Random DiceBear avatars
* Local Storage user persistence
* Monaco Editor integration
* Automatic synchronization across connected clients

---

## Project Structure

```text
DockLab/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeEditor.jsx
│   │   │   ├── JoinModal.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Workflow

```text
Open Application
        │
        ▼
Join Modal
        │
        ▼
Generate Random Avatar
        │
        ▼
Enter Name
        │
        ▼
Store User (Local Storage)
        │
        ▼
Create Y.Doc
        │
        ▼
Socket.IO Provider
        │
        ▼
Monaco Binding
        │
        ▼
Yjs Awareness
        │
        ▼
Live Collaboration
```

---

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm start
```

---

## Roadmap

### Completed

* Real-time collaborative editing
* Monaco Editor integration
* Yjs synchronization
* Live user presence
* Random avatars
* Local Storage persistence

### Planned

* Collaboration rooms
* Shareable room links
* Remote cursor synchronization
* File explorer
* Multi-file support
* Chat system
* Code execution
* Authentication
* Database persistence
* Role & permission management
* Version history
