<h1 align="center">Notes App</h1>

<img width="1920" height="926" alt="image" src="https://github.com/user-attachments/assets/651ac1d8-42ce-46b5-b9ac-caa0b57af67d" />

## Table of Contents
- [Key Highlights](#key-highlights)
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

_Notes Page_
<img width="1920" height="926" alt="image" src="https://github.com/user-attachments/assets/651ac1d8-42ce-46b5-b9ac-caa0b57af67d" />

_Note Details Page_
<img width="1920" height="926" alt="image" src="https://github.com/user-attachments/assets/af337c70-e85a-4c09-834c-327bdd0f0143" />

_Create Note Page_
<img width="1920" height="926" alt="image" src="https://github.com/user-attachments/assets/aa683a49-4da6-45dc-b50b-b3d50db14578" />


