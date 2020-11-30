//    * Import (require) `connection.js` into `orm.js`
const connection = require('../config/connection');
const { promisify } = require('util');

const promiseQuery = promisify(connection.query).bind(connection);
const queryEnd = promisify(connection.end).bind(connection);

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {

    //      * `selectAll()`
    selectAll: async function selectAllBurgers() {
        try {
            const results = await promiseQuery('SELECT * FROM burgers')
            return results;
        }
        catch (error) {
            console.log(error)
        }
    },
    //      * `insertOne()`
    insertOne: async function insertBurger(burger_name) {
        try {
            const results = await promiseQuery('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)', [ burger_name, false ])
            return results;
        }
        catch (error) {
            console.log(error);
        }
    },
    //      * `updateOne()`
    updateOne: async function updateOne(id) {
        try {
            const results = await promiseQuery('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: id }])
            console.log(results)
            return results;
        } catch (error) {
            console.log(error)
        }
    }
};

process.on('beforeExit', () => {
    queryEnd();
})
//    * Export the ORM object in `module.exports`.
module.exports = orm;