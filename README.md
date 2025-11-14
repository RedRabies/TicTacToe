MERN Stack Tic-Tac-Toe 🕹️
This is a simple Tic-Tac-Toe game I built using the MERN stack.

It's not just a simple frontend toy—it's a full-stack app. It's set up to save the winner of every single game to a MongoDB database and then pull that data to show a complete game history right on the page.

What it does:
Lets you play a standard 3x3 game of Tic-Tac-Toe.

Figures out when a player wins or when the game is a draw.

Saves the result of every match (who won or if it was a draw) to the database.

Shows a running list of all past game results.

What's under the hood?
Frontend: React

Backend: Node.js & Express

Database: MongoDB

🚀 How to Get it Running
You'll need to run two things at the same time: the backend server and the frontend app.

1. The Backend (Server)
First, let's get the server running.

Open your terminal and cd into the backend folder:

Bash

cd backend
Install all the packages it needs:

Bash

npm install
Important: You'll need to make a .env file in this /backend folder. Inside that file, add your MONGODB_URI connection string so it can find your database.

Start the server:

Bash

npm start
You should see a message in your terminal confirming it's connected to MongoDB and running on its port (like 5000).

2. The Frontend (The Game)
Now, let's run the game itself.

Fire up a new, separate terminal (you need to leave the backend one running!).

cd into the frontend app's folder:

Bash

cd frontend/tic-tac-toe
Install its packages:

Bash

npm install
Run the app:

Bash

npm run client
This should automatically open the game in your browser at http://localhost:3000.
