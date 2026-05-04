# Leash & Learn Dog Training

A comprehensive dog training management platform built with React, Express, and MongoDB. This application allows users to enroll in training classes, manage their dogs, interact with a community blog, and communicate via AI chat powered by Ollama.

## Features

### Main Features
- **Light/Dark Mode Toggle**: Respects system preferences, saves theme to localStorage, with different accent colors
- **Animations & UX**: Smooth transitions using Framer Motion, Animate.css, and Motion
- **Private Routes**: Protects dashboard and enrollment pages
- **Dynamic Rendering**: Conditional UI based on user roles and permissions

### Homepage
- Services overview
- Trainer information
- Rolling gallery
- Call-to-action enrollment

### FAQ Page
- Comprehensive FAQ section

### Community Blog
- **CRUD Operations**: Create, read, update, delete blog posts
- **Public Access**: Anyone can view blogs
- **Authentication Required**: Must be logged in to create posts
- **Ownership Controls**: Edit/delete only your own posts, or if you're a BM/Trainer
- **Comments**: Full CRUD on comments with similar permissions
- **Image Support**: Blog cover photos

### Contact Us
- Send messages that appear in BM/Trainer inbox

### AI Chat
- Integrated with Ollama API for intelligent responses
- Tailored AI instructions for dog training context
- Chat history saved by user email or anonymous session

### User Management
- **Account Creation**: Validation to prevent duplicate emails/usernames
- **Authentication**: JWT-based login/logout
- **Profiles**: Edit user details
- **Dog Management**: CRUD operations for user's dogs

### Training Classes & Sessions
- **Class Enrollment**: View details and enroll
- **Session Generation**: Automatic 8-week session creation based on class type
- **Role-Based Dashboards**:
  - **Business Manager/Trainer**: Full CRUD on classes/sessions, inbox management
  - **User**: View enrolled classes, manage dogs

### Dashboards
- **User Dashboard**: Profile editing, dog management, enrolled classes table
- **BM/Trainer Dashboard**: Training class management, message inbox

## Tech Stack

### Frontend
- React 18
- Redux Toolkit
- Tailwind CSS
- Vite
- Axios
- Framer Motion
- Animate.css
- React Icons
- React Toastify
- Recharts

### Backend
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Argon2 Password Hashing
- CORS
- Ollama API Integration

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (running locally or provide connection string)
- **Ollama** (for AI chat functionality)
- **npm** or **yarn**

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/leash-and-learn.git
   cd leash-and-learn
   ```

2. **Install dependencies**:

   **Client**:
   ```bash
   cd client
   npm install
   ```

   **Server**:
   ```bash
   cd ../server
   npm install
   ```

   **Test/Seeding**:
   ```bash
   cd ../test
   npm install
   ```

## Setup

1. **Environment Variables**:

   Copy the example environment files and configure them:

   **Server (.env)**:
   ```bash
   cd server
   cp .env.example .env
   ```
   Edit `.env` with your MongoDB URL and secret key.

   **Client (.env)**:
   ```bash
   cd ../client
   cp .env.example .env
   ```
   Edit `.env` with the server URL.

   **Test (.env)**:
   ```bash
   cd ../test
   cp .env.example .env
   ```
   Edit `.env` with the server URL.

2. **MongoDB**:
   - Ensure MongoDB is running locally on default port (27017), or update `MONGODB_URL` in server/.env
   - The app will create the database `leash-and-learn` automatically

3. **Ollama Setup**:
   - Install Ollama from https://ollama.ai/
   - Pull the required model (gemma2)

## Running the Application

1. **Start the Server**:
   ```bash
   cd server
   npm run dev
   ```
   Server will run on http://localhost:8000 (or your configured port)

2. **Start the Client**:
   ```bash
   cd client
   npm run dev
   ```
   Client will run on http://localhost:3000

3. **Access the Application**:
   Open http://localhost:3000 in your browser

## Seeding Data

The application includes seeding scripts to populate the database with initial data.

### Seed Users
Creates trainer and user accounts:
```bash
cd test
node seedUsers.js
```

### Seed Trainers
Creates additional trainer accounts:
```bash
cd test
node seedTrainers.js
```

### Seed Builders
Creates builder data for training sessions:
```bash
cd test
node seedBuilders.js
```

**Note**: Ensure the server is running before executing seeding scripts, as they make API calls to populate the database.

## Logging In

You can log in with any of the credientials in the seedTrainers file. ALL of the user passwords is the word "test". The Business Manager would kit@leashandlearn.com with password "test", for example.

## API Endpoints

The backend provides RESTful APIs for:
- User management (/users)
- Training classes (/training-classes)
- Builders (/builders)
- Contact messages (/contact)
- Blog posts and comments (/blog)
- Chat functionality (/chat)

## Project Structure

```
leash-and-learn/
├── client/          # React frontend
├── server/          # Express backend
├── test/            # Seeding and test scripts
├── README.md
```

## Future Enhancements

- Blog and class archiving
- Pagination on tables
- Dynamic search and filtering
- Blog likes and interactions
- Dog progress tracking and report cards
- Company blog section
- Loading skeletons