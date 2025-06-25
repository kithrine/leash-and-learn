# CAPSTONE PRESENTATION: LEASH & LEARN DOG TRAINING
<!-- - Over 400 hours of coding -->

## Technologies Used
### Frontend
- React Javascript
- Redux Toolkit
- Tailwindcss
- Axios
- Motion/Framer-motion
- Animate.css
- ReactBits
- React Icons
- React Toastify
- Recharts

### Backend
- Express
- Mongoose/Mongo DB
- Argon2
- JWT
- Cors
- Axios
- Locally installed Ollama API

## Features
### Main Features
- **Light/Dark mode toggle (respects system preference and works with the "dark:" tailwind utility class prefix, saves theme into localStorage) - featuring a different theme/accent colors**
- Animations/Transitions/UX
- **Private Route protecting certain pages within application (Dashboard, Enroll Form, etc.)**
- **Dynamic/Conditional Rendering**
  - Classnames/utility classes
  - Dashboards (depending on user role)
  - Buttons to edit/delete blog content only if you are the user that created it

### HOMEPAGE
- Services Overview
- About Trainers
- Rolling Gallery
- Call to Action/Enroll

### FAQ PAGE

### BLOG
#### COMMUNITY BLOG
##### Blog Posts
- CRUD
- Blog Posts are public
- User must have an account and be logged in to create blog
- Edit/Delete blog posts ONLY if you are the user that posted the blog
- Edit/Delete any blog if user role is BM/Trainer
- Shows blog cover photo as it changes in the edit blog modal

##### Blog Comments
- CRUD
- Must have an account to post a comment
- Only the user that posted the blog comment can edit or delete it
- BM and Trainers also have access to editing/deleting all blog comments

### CONTACT US
- Messages appear in BM/Trainer Inbox

### AI CHAT
- Has chat communicate with the backend using ollama
- **AI model instructions for responses to meet Leash & Learn user needs and questions**
- **Grabs the chat history according to the user's email OR if the user is not logged in creates an "anonymous email" key to save the chats in session storage**

### USER ACCOUNT CREATE
- **Account creation with validation functionality to ensure an account does not already exist in the database. The fields validated are: email, username, or if the passwords do not match**

### ENROLLMENT IN CLASS
- Ability to view Training Class Detail page using a get method when user clicks on button

### TRAINING CLASSES/SESSIONS
- **Builders for 8-week Training Class Sessions automatically generate once a new class is created by the BM. The sessions are different for each type of class**

### DASHBOARDS
- Ability for user to edit profile details
  
#### BUSINESS MANAGER/TRAINER DASHBOARD
##### Training Classes/Sessions
- Full CRUD 
##### Inbox
- Render Contact Us messages in the inbox - Delete

#### USER DASHBOARD
- CRUD for dogs
- Table for enrolled classes

## Future Functionality
- Archiving of Blogs, Training Classes, Messages, Users
- Pagination on tables
- Dynamic Search Filtering (Blog posts, Inbox messages, Training Classes)
- Ability to Like a blog post/comment
- Progress tracking of dog/report card at end of training class
- Company Blog
- Skeletons/Loading indicators