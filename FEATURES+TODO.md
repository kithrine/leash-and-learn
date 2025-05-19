# Leash & Learn Dog Training

## Description

## Main Features

## TODO

### HOMEPAGE
- [ ] Services Overview
- [ ] Blog Overview
- [x] About Trainers
- [ ] Rolling Gallery
- [ ] Call to action/Enroll

### FAQ PAGE
- [ ] Change to an accordian-style dropdown


### BLOG
#### COMMUNITY BLOG
##### Blog Posts
- [x] Blog is public
- [x] Add new blog
- [x] Edit blog
- [x] Blog Delete
- [ ] Blog Archive
- [ ] * Make sure that ONLY the user that posted the blog can edit or delete/archive it
- [ ] * Make sure the BM and Trainers also have access to deleting/archiving blogs
- [ ] Ability to "like" and/or "favorite" a post
##### Blog Comments
- [ ] * Must have an account to post a comment
- [ ] Put a reminder by the start of the blog comments that you MUST have an account in order to post a comment
- [x] Add blog comment
- [x] Edit blog comment
- [x] Delete blog comment
- [ ] * Make sure that ONLY the user that posted the blog comment can edit or delete it
- [ ] * Make sure the BM and Trainers also have access to deleting comments
- [ ] Ability to "like" a comment
##### Additional Community Blog Features
- [ ] Pagination?
- [ ] Dynamic Search Filtering
#### COMPANY BLOG
- [ ] Pagination?
- [ ] Dynamic Search Filtering
- [ ] Ability to Like a post


### CONTACT US


### CHAT APPLICATION
- [ ] The Trainers and Business Manager have a tag/title by their name that says "Leash & Learn Certified Trainer" or something like that


### AI CHAT


### USER LOGIN/LOGOUT
- [ ] Update Login to using Passport

### USER SIGNUP FOR NEW USERS
- [x] New user create


### NEWSLETTER
- [ ] Create for user signing up for the Newsletter
- [ ] Delete so user can remove themselves from recieving newsletter
- [ ] If user signed up for newsletter (validating by checking with user email), have indicator on profile showing that they are currently signed up for it

### ADDITIONAL FEATURES
- [ ] Light/Dark Mode Toggle
- [ ] Responsive Design
- [ ] "Enroll Now" ability for a customer to enroll in a class
- [ ] ARCHIVE Training Class, Blogs, Contact Us Messages, etc
- [ ] Skeletons/Spinners Everywhere
- [ ] Progress Tracking for Individual Dogs
- [ ] Customer Detail Page that links from the BM/Trainer Dashboard when they click on a customer currently enrolled in a class

### TABLES
- [ ] Pagination 
- [ ] Dynamic Search Filtering

### TRAINING CLASSES/SESSIONS
- [x] Builders for 8-week Training Class Sessions automatically build once a new class is created by the BM, depending on the type of class

### DASHBOARDS  
- [x] Dashboards protected in a Private Route
- [x] 3 Different Dashboard depending on the role of the user: Business Manager, Trainer, User

#### BUSINESS MANAGER DASHBOARD
##### Profile
- [ ] Ability to edit profile
##### Training Class
- [x] Add a new Training Class
- [x] Update Training Class
- [ ] Delete Training Class
- [ ] Archive Training Class
- [ ] Create a placeholder caption under the name in the Training Class create for example syntax of the naming convention
- [ ] Update the trainingClassGetMany by using email instead of username
- [ ] Need to change Training Class Schema because the customer's array is not proper (maybe move customer's array to under training classes instead of under sessions)
##### Sessions
- [x] Add new Session
- [x] Update Session
- [x] Delete Session
- [ ] Archive Session
- [ ] Sort Session Add by name of class, like alphabetically ordered so if I add a new class called "Week 9" it goes to the end of the array, but if I delete "Week 3", then add a new session starting with the name "Week 3", it goes it the correct spot
##### Inbox
- [ ] Need to fix auto-refresh of Inbox once a message is deleted
- [ ] Redo the style of the Inbox and have an Inbox Detail page
- [ ] Clamp the Message on the Inbox List page using "line-clamp-[20]" for example


#### TRAINER DASHBOARD
##### Profile
- [x] Ability to edit profile

#### USER DASHBOARD
##### Profile
- [x] Abilitly to edit basic profile information
  - [ ] Fix refresh on edit profile page from clearing the form
  - [ ] Make sure that if user changes username that new username does not already exist in database
- [ ] Ability to upload an avatar
- [ ] Liked/Favorited blog posts appear on user's profile page
##### Dogs
- [x] Add dog(s)
- [x] Edit dog(s)
- [x] Delete dog(s)
- [ ] Show Happy Birthday picture on Dog Card when it is the dog's birthday
##### Enroll
- [ ] Ability for user to enroll in a Training Class

## Technology Used