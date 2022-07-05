/* Packages */
const express = require('express');
const app = express();
const mongoose = require('mongoose');

/* GLOBAL VARIABLES */
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
