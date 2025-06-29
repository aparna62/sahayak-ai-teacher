{
  "name": "sahayak-ai-teacher",
  "version": "1.0.0",
  "description": "AI Teaching Assistant for Multi-Grade Classrooms",
  "scripts": {
    "install-all": "cd backend && npm install && cd ../frontend && npm install",
    "build": "cd frontend && npm run build",
    "deploy": "npm run build && firebase deploy",
    "dev-backend": "cd backend && firebase emulators:start",
    "dev-frontend": "cd frontend && npm start",
    "demo": "concurrently \"npm run dev-backend\" \"npm run dev-frontend\""
  },
  "devDependencies": {
    "concurrently": "^7.6.0"
  }
}
{
  "functions": {
    "source": "backend/functions",
    "runtime": "nodejs18"
  },
  "hosting": {
    "public": "frontend/build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "/api/**",
        "function": "api"
      },
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
{
  "name": "sahayak-backend",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "firebase-functions": "^4.5.0",
    "firebase-admin": "^11.11.0",
    "@google-cloud/aiplatform": "^3.5.0",
    "@google-cloud/speech": "^6.0.0",
    "@google-cloud/text-to-speech": "^5.0.0",
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "multer": "^1.4.5"
  }
}

