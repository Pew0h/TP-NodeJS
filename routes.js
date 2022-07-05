const express = require('express');
const router = express.Router();
const Dog = require('./models/Dog');

module.exports = router;

// Routes List
router.get('/dogs', async (req, res) => {
    const dogs = await Dog.find()
    res.send(dogs);
});

router.post('/dogs', async (req, res) => {
    if (!req.body.name || !req.body.color || !req.body.race){
        res.send('Error ! Dog is defined with name, color and race');
        return;
    }
    const dog = new Dog({
        name: req.body.name,
        color: req.body.color,
        race: req.body.race
    });
    await dog.save().then(() => {
        res.send(dog);
    }).catch((error) => {
        res.send(error);
    });
});
