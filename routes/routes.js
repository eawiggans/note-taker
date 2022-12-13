const app = require('express').Router();
const fs = require('fs')

// GET route for notes html page
app.get('/notes.html', (req, res) => {
    console.info(`${req.method} request received`)
}
// res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET route for index.html page
app.get('/index.html', (req, res) => {
    console.info(`${req.method} request received`)
}
// res.sendFile(path.join(__dirname, '/public/index.html'))
);