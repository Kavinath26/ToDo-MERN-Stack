# ToDo Application (MERN Stack)
## Overview

Developed a full-stack ToDo web application using the MERN stack (MongoDB, Express.js, React, Node.js). The application enables users to create, update, and manage tasks efficiently with a responsive user interface and persistent backend storage.

## Screenshots
<img width="1919" height="1079" alt="Screenshot 2026-03-18 114941" src="https://github.com/user-attachments/assets/87ecdb69-4ebb-4d77-81d7-c9d3093063af" />

<img width="1919" height="1079" alt="Screenshot 2026-03-18 115055" src="https://github.com/user-attachments/assets/023fe596-acbe-4cf0-a04e-3da72d54f974" />


## Key Features

Implemented full CRUD operations (Create, Read, Update, Delete) for task management

Designed RESTful APIs using Express.js and Node.js

Integrated MongoDB for persistent data storage

Built a responsive and interactive frontend using React

Enabled real-time UI updates based on user actions

Implemented form handling for task creation and editing

Structured task display with title and description fields

## Technical Stack

MongoDB (Database)

Express.js (Backend Framework)

React (Frontend Library)

Node.js (Runtime Environment)

JavaScript (ES6+)

CSS (UI Styling)

## Architecture

The application follows a standard MERN architecture with clear separation of concerns:

Frontend (React): Handles UI rendering and user interactions

Backend (Node.js + Express): Manages API requests and business logic

Database (MongoDB): Stores task data in a structured format

Client-server communication is handled via REST APIs, ensuring scalability and maintainability.

API Endpoints
Method	Endpoint	Description
GET	: /todos -	Fetch all tasks
POST : /todos -	Create a new task
PUT	: /todos/:id -	Update a task
DELETE : /todos/:id -	Delete a task

## Implementation Details

Used React Hooks for state management and lifecycle handling

Managed API calls using asynchronous JavaScript (fetch)

Implemented controlled components for form inputs

Ensured clean and modular folder structure

Handled error states and edge cases for API requests


## Future Enhancements

User authentication and authorization

Task prioritization and deadlines

Search and filtering functionality

Deployment using cloud platforms (AWS, Vercel, Render)

Improved UI/UX and accessibility
