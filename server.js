// required packages
const express = require('express');
const exphbs = require('express-handlebars');

// global vars 
const app = express();

const PORT = process.env.PORT || 8080;

// setting the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// route for handlebars
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', require('./controllers/burgers_controller'));

// server listener
app.listen(PORT, () => {
    console.log('app running on PORT: ' + PORT);
});