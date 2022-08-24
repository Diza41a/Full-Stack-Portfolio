const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// POST

// GET
app.get('/test', (req, res) => {
  fs.readFile(path.join(__dirname, '../client/dist/assets/about-me.txt'), (err, data) => {
    res.send(data.toString());
  });
});

// PUT

// DELETE

const port = 3000;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
