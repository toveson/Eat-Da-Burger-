//    * Import (require) `connection.js` into `orm.js`
const connection = require('../config/connection');
const { promisify } = require('util');

const promiseQuery = promisify(connection.query).bind(connection);
const queryEnd = promisify(connection.end).bind(connection);

const orm = {
    // select All
    selectAll: async function selectAllBurgers() {
        try {
            const results = await promiseQuery('SELECT * FROM burgers')
            return results;
        }
        catch (error) {
            console.log(error)
        }
    },
    // insert One
    insertOne: async function insertBurger(burger_name) {
        try {
            const results = await promiseQuery('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)', [ burger_name, false ])
            return results;
        }
        catch (error) {
            console.log(error);
        }
    },
    // update One
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
// Export the ORM
module.exports = orm;