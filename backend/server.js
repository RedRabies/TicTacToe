require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const gamesRouter = require('./routes/games');
app.use('/api/games', gamesRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/tic-tac-toe/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/tic-tac-toe/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
