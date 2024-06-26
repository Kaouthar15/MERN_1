**Real Estate Project README**

### Project Overview
This project is a real estate web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to provide users with a platform to browse, search, and list properties for sale or rent.

### Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Kaouthar15/MERN_1
   cd MERN_1
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

### Project Structure
- **api/**: Contains the backend code.
- **client/**: Contains the frontend code.
- **models/**: Contains Mongoose models for MongoDB.
- **routes/**: Contains Express.js route handlers.
- **controllers/**: Contains controllers for handling business logic.
- **utils/**: Contains utility functions.
- **public/**: Contains static assets.

### Dependencies
- **@reduxjs/toolkit**: Redux toolkit for state management.
- **bcryptjs**: Library for hashing passwords.
- **cookie-parser**: Middleware for parsing cookies.
- **dotenv**: Library for loading environment variables.
- **express**: Node.js web framework.
- **firebase**: Firebase SDK for storing images and connecting to Google services.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWT).
- **mongoose**: MongoDB object modeling tool.
- **nodemon**: Utility that automatically restarts the server during development.
- **react-redux**: React bindings for Redux.
- **redux-persist**: Library for persisting Redux state.

### Usage
- **Authentication**: Users can sign up, log in, and log out securely using JSON Web Tokens.
- **Property Listings**: Users can browse through a list of available properties or add their own real estate listings.
- **Search**: Users can search for properties based on various criteria such as location, price, etc.
- **Image Storage**: Property images are stored securely in Firebase Storage.
- **Google Integration**: Connects to Google services for authentication and possibly other features.