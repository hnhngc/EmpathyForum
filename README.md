# EmpathyForum

A community platform focused on empathy and mental health support.

## Project Structure

```
EmpathyForum/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── features/
│   │   │   └── common/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── styles/
│   │   └── config/
│   └── config.js
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── config/
│   ├── .env
│   └── index.js
└── .gitignore
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```
3. Create `.env` file in server directory with:
   ```
   PORT=3019
   MONGODB_URI=mongodb://127.0.0.1:27017/Empathy
   ```
4. Start the server:
   ```bash
   cd server
   npm start
   ```
5. Open client/index.html in your browser