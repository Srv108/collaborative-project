const express = require('express');
const fs = require('fs');
const router = express.Router();

const filePath = './data/movies.json';

// Helper function to read JSON file
const readData = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

router.get('/movies', (req, res) => {
    const movies = readData();
    res.json(movies);
});

module.exports = router;