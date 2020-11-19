//required packages
const express = require('express');
const burger = require('../models/burger')
const router = express.Router();

// 4. Create the `router` for the app 

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
    console.log('hit me');
    await burger.updateOne([burger_name], [req.body.burger_name]);
    res.redirect('/');
});

// export the `router` at the end of your file
module.exports = router;