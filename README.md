# NASA Explorer

NASA Explorer is a full-stack web application that allows users to explore NASA's vast collection of space-related media. The application provides features such as:

- **Content Search:** Query NASA’s open APIs to view Astronomy Picture of the Day (APOD), Mars Rover photos, EPIC images, and more.
- **Content-Based Image Retrieval:** On the detail page, similar images are fetched based on the current content.
- **Responsive Design:** A modern, responsive user interface built with React and Material UI.
- **Backend API Integration:** A Node.js/Express backend that acts as a proxy to NASA’s APIs and handles errors.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
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
- **Favorites and Bookmarking:** Easily save and manage your favorite items using local storage.
- **Content-Based Image Retrieval:** Discover similar images based on the content currently viewed.
- **Responsive UI:** Clean and modern interface built with Material UI.
- **API Proxy:** A Node.js backend to securely handle API requests and errors.

## Tech Stack

- **Frontend:** React, Material UI, React Router, Axios
- **Backend:** Node.js, Express, Axios, dotenv, cors
- **Testing:** Jest, Supertest
- **APIs:** NASA Open API

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







