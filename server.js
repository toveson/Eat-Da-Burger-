// required packages
const express = require('express');
const exphbs = require('express-handlebars');

// global vars 
const app = express();
const PORT = process.env.PORT || 8080;

// express middleware
app.use(express.urlencoded({
    extended: true
}))

// express static 
app.use(express.static('public'));

// setting the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', require('./controllers/burgers_controller'));

// server listener
app.listen(PORT, () => {
    console.log('app running on PORT: ' + PORT);
});