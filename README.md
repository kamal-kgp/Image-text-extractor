# Image Text Extractor

A simple MERN stack application where users can upload an image and input text, and see the extracted content from the image.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- **Image Upload**: Users can upload images.
- **Text Input**: Users can input language of text in image.
- **Content Extraction**: Extracts and displays text content from uploaded images.
- **Real-Time Feedback**: Users can see the extracted content immediately after processing.

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/kamal-kgp/Image-text-extractor.git
   cd image-text-extractor

2. **Install dependencies**

Navigate to both the frontend and backend directories and run:
    ```sh
    npm install

3. **Environment Variables**

Create a .env file in the src directory inside backend directory and add your MongoDB URI and any other environment variables:

.env
    ```sh
    MONGO_URI = your_mongo_db_connection_string
    PORT = 5001

4. **Run the application**

In the src directory inside backend directory, start the server:
    ```sh
    node server.js

In the frontend directory, start the client:
    ```sh
    npm start

The application will be available at http://localhost:3000.


## Usage

1. **Upload an image**
     Click on the "choose file" button to select and upload an image file

3. **Input text**
    Enter language into the provided input field.

4. **View extracted content**
    The extracted text content from the image will be displayed on the screen.


## Technologies
1. **Frontend: React, Axios**
2. **Backend: Node.js, Express.js, Mongoose, multer**
3. **Database: MongoDB**
4. **Image Processing: Tesseract.js**


## Project Structure
    
    image-text-extractor/
    │
    ├── backend/
    │   ├── src/
    │   │   ├── config/
    │   │   │   └── mongoose.js
    │   │   ├── controllers/
    │   │   │   └── analysisController.js
    │   │   ├── models/
    │   │   │   └── ImageAnalysis.js
    │   │   ├── routes/
    │   │   │   └── analysisRoutes.js
    │   │   ├── .env
    │   │   └── server.js
    │   └── package.json
    │
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── App.js
    │   │   └── index.js
    │   └── package.json
    │
    ├── .gitignore
    └── README.md
 

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any features, enhancements, or bug fixes.

1. **Fork the Project**
2. **Create your Feature Branch (git checkout -b feature/AmazingFeature)**
3. **Commit your Changes (git commit -m 'Add some AmazingFeature')**
4. **Push to the Branch (git push origin feature/AmazingFeature)**
5. **Open a Pull Request**
