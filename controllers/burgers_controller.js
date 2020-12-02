//required packages
const express = require('express');
const burger = require('../models/burger')
const router = express.Router();

// get route
router.get('/', async (req, res) => {
    let data = await burger.selectAll()
    res.render('index', { burgers: data });
});

// post route
router.post('/burgers', async (req, res) => {
    await burger.insertOne(req.body.burger_name);
    res.redirect('/');
});

// put route
router.put('/burgers/:id', async (req, res) => {
    let id = (req.params.id);
    await burger.updateOne(id);
    res.send('okay');
});

// export the router
module.exports = router;