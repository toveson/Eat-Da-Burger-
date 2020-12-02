// required packages
const orm = require('../config/orm');

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

// Export burger 
module.exports = burger;