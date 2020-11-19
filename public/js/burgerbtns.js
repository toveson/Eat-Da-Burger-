const { insertOne } = require("../../config/orm");

$('#burgerMaker').on('submit', (event) => {
    event.preventDefault();
    await insertOne();
});

$('.eat_me').on('click', (event) => {
    console.log(event);
});