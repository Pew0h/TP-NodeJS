/* Packages */
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

/* GLOBAL VARIABLES */
const app = express();
const port = 3001;
const MONGODB_URL = 'mongodb+srv://root:root@cluster0.xzbb0.mongodb.net/test';
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on('error', (error) => {
    console.log('ERROR', error);
});

database.once('open', () => {
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.send('TEST');
});

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
