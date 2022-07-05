const express = require('express');
const router = express.Router();
const Dog = require('./models/Dog');

module.exports = router;

// Routes List

router.get('/dogs', async (req, res) => {
    const dogs = await Dog.find()
    res.send(dogs);
});
