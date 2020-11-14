//required packages
const express = require('express');
const burger = require('../models/burger')
const router = express.Router();

// 4. Create the `router` for the app 

// get route
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        res.render('index', { burger: data });
    });
});

// post route
router.post('/burgers', (req, res) => {
    burger.insertOne([burger_name], [req.body.burger_name], data => {
        res.redirect('/');
    });
});

// put route
router.put('/burgers/:id', (req, res) => {
    burger.updateOne([burger_name], [req.body.burger_name], data => {
        res.redirect('/');
    });
});

// export the `router` at the end of your file
module.exports = router;