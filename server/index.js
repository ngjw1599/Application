// file serves as entry point for node js server

// importing express framework
const express = require('express');
const cors = require('cors');

// create instance of application
const app = express();

app.use(cors());

// define port number to run on
const port = process.env.PORT || 5000;

// define route request to handle GET requests to /api/data endpoint
app.get('/api/data', (req,res) => {
    // respond with json message
    res.json({ message: 'hello from server!'});
});

// start server and listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});