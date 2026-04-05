# Notes App
_Using the MERN Stack_

fancy image here

## Table of Contents
- [Key Highlights](#key-Highlights)
- [Running the App](#running-the-app)
  - [In Production](#in-production)
  - [In Development](#in-development)
- [Gallery](#gallery) 

## Key Highlights
- blah blah

## Running the App
### In Production
1. **Install dependencies**
    ```
    npm run build
    ```
2. **Configure environment variables**
   
    Place the `.env` file within the backend folder.
    ```
    MONGO_URI=<your_mongo_uri>
    PORT=5001
      
    UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
    UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
      
    NODE_ENV=production
    ```
3. **Run the server**
    ```
    npm run start
    ```
4. **View on browser at**
   [http://localhost:5001/](http://localhost:5001/)

### In Development
1. **Configure environment variables**
   
    Place the `.env` file within the backend folder.
    ```
    MONGO_URI=<your_mongo_uri>
    PORT=5001
      
    UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
    UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
      
    NODE_ENV=development
    ```
2. **Run the backend**
    ```
    cd backend
    npm install
    npm run dev
    ```
3. **Run the frontend**
    ```
    cd frontend
    npm install
    npm run dev
    ```
4. **View on browser at**
   [http://localhost:5173/](http://localhost:5173/)

## Gallery

fancy images here...
