// required packages
const { insertOne } = require('../config/orm');
const orm = require('../config/orm');

//* Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {

    // select all
    selectAll: () => {
        orm.selectAll((res) => {
            await(res);
        });
    },
    // insert one
    updateOne: () => {
        orm.updateOne((res) => {
            await(res);
        });
    },
    // update one
    updateOne: () => {
        orm.updateOne((res) => {
            await(res);
        });
    }
}


//* Export at the end of the `burger.js` file.// 
module.exports = burger;