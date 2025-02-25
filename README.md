# NASA Explorer

NASA Explorer is a full-stack web application that allows users to explore NASA's vast collection of space-related media. The application provides features such as:

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Frontend Architecture](#frontend-architecture)
- [Backend Architecture](#backend-architecture)
- [Setup and Installation](#setup-and-installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Backend API Tests](#testing)
- [Usage](#usage)
- [License](#license)

## Features

- **Search NASA Content:** Browse images, videos, and more using NASA's public APIs.
- **Content-Based Image Retrieval:** Discover similar images based on the content currently viewed. (BONUS)
- **Responsive UI:** Clean and modern interface built with Material UI.
- **API Proxy:** A Node.js backend to securely handle API requests and errors.

## Tech Stack

- **Frontend:** React, Material UI, React Router, Axios
- **Backend:** Node.js, Express, Axios, dotenv, cors
- **Testing:** Jest, Supertest
- **APIs:** NASA Open API

### Frontend Architecture

- **Framework & Libraries**:
The frontend is built with React and styled with Material UI. We use React Router for client-side routing to enable smooth navigation between pages (Home, Detail).

- **Key Components**:
Home Page: Displays NASA content, allows users to search, filter, and browse images/videos retrieved from NASA APIs via the backend.

- **Detail Page**: 
Shows detailed information for a selected content item and retrieves similar images based on content. (BONUS)

- **Service Layer**:
The frontend contains service modules (e.g., for API calls) to communicate with the backend, ensuring a clear separation between UI components and data fetching logic.

- **Deployment**:
The frontend is built as a static site (using Vite) and deployed on Vercel platform.

### Backend Architecture

- **Framework & Libraries**:
The backend is built with Node.js and Express, serving as an API proxy to NASA’s public APIs. It uses Axios for HTTP requests and dotenv to manage environment variables.

- **Layered Structure**:
API Routes & Controllers: Handle incoming HTTP requests, process query parameters, and forward requests to the appropriate service methods.

- **Domain Services (Business Logic)**: 
Contain the core logic for fetching and processing NASA data (like APOD, Mars Rover Photos, EPIC img). This layer abstracts away external API details.

- **Infrastructure/External Adapters**: 
Modules (like nasaApi) that directly interact with external NASA APIs. This layer ensures that the API keys and other sensitive details are kept secure on the server side.

- **Error Handling**:
Global error handling middleware is implemented to capture and respond to runtime errors gracefully.

- **Deployment**:
The backend is deployed as a Node.js web service. It’s configured to work with environment variables (such as NASA_API_KEY), and its API endpoints are secured and rate-limited as needed.

## Setup and Installation

### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/tiagoluis12/nasa-api-project
   cd nasa-api-project/backend
   npm install

2. ## Environment Variables
.env file:
 ```bash
NASA_API_KEY=nasa_api_key_here
PORT=3000
```

3. ## Start the Backend Server:
 ```bash
npm start
The backend should now be running on http://localhost:3000
```

### Frontend Setup

1. ## Navigate to the Frontend Folder:
 ```bash
cd ../frontend
```
2. ## Install Dependencies:
 ```bash
npm install
```
3. ## Start the Frontend:
 ```bash
npm run dev
```
### Backend API Tests
 ```bash
cd nasa-api-project/backend
```
## Run Tests:
 ```bash
npm test
```

## Test Files:
- API Endpoints: tests/api.test.js
- nasaService: tests/nasaService.test.js

### Usage
Search Content: Use the search bar on the Home page to find NASA images and videos.
View Details: Click on a content card to see detailed information and similar images.

### License
This project is licensed under the MIT License.

This README provides a comprehensive overview of the project, setup instructions, and usage details. You can modify sections as needed to match your project’s specifics.







