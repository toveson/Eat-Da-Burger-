//    * Import (require) `connection.js` into `orm.js`
const connection = require('../config/connection');

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {

    //      * `selectAll()`
    selectAll: async function selectAllBurgers() {
        try {
            const results = await connection.query('SELECT * FROM burgers')
        }
        catch (error) {
            console.log(err)
        }
    },
    //      * `insertOne()`
    insertOne: async function insertBurger() {
        try {
            const results = await connection.query('INSERT INTO burgers VAULES ?', { insertBurger: burger_name, devoured: false })
    }
        catch (error) {
            console.log(err)
        }
    },
    //      * `updateOne()`
    updateOne: async function updateOne() {
        try {
            results = await connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerId }])
        } catch (error) {
            console.log(err)
        }

    }
};

//    * Export the ORM object in `module.exports`.
module.exports = orm;