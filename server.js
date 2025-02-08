const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const movieRoutes = require('./routes/movies');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', movieRoutes);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});