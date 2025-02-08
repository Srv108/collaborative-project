const express = require('express');
const fs = require('fs');
const router = express.Router();

const filePath = './data/movies.json';

// Helper function to read JSON file
const readData = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

router.get('/movies', (req, res) => {
    const movies = readData();
    res.json(movies);
});

router.post('/movies', (req, res) => {
    const movies = readData();
    const newMovie = {
        id: movies.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        duration: req.body.duration,
        releaseDate: req.body.releaseDate
    };
    movies.push(newMovie);
    writeData(movies);
    res.status(201).json(newMovie);
});

module.exports = router;