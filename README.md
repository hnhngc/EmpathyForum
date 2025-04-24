# EmpathyForum

A community platform focused on empathy and mental health support.

## Project Structure

```
EmpathyForum/
├── README.md
├── client
│   ├── README.md
│   ├── config.js
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── config
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   └── utils
│   └── tests
└── server
    ├── README.md
    ├── index.js
    ├── package-lock.json
    ├── package.json
    └── src
        ├── config
        ├── controllers
        ├── middleware
        ├── models
        └── routes
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
