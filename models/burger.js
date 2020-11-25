// required packages
const orm = require('../config/orm');

//* Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {

    // select all
    selectAll: async () => {
        return await orm.selectAll();
    },
    // insert one
    insertOne: async (burger_name) => {
       return await orm.insertOne(burger_name);
    },
    // update one
    updateOne: async (id) => {
        return await orm.updateOne(id);
    }
}


//* Export at the end of the `burger.js` file.// 
module.exports = burger;