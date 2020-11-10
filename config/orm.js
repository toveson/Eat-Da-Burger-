//    * Import (require) `connection.js` into `orm.js`
const connection = require('../config/connection');

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {

    //      * `selectAll()`
    selectAll: async function selectAllBurgers() {
        return new Promise((res, rej) => {
            connection.query('SELECT * FROM burgers', function (err, results, fields) {
                if (err) throw err;
                res(results);
            });
        });
    },
    //      * `insertOne()`
    insertOne: async function insertBurger() {
        return new Promise((res, rej) => {
            connection.query('INSERT INTO burgers SET ?', { insertBurger: burger_name, devoured: false }, function (err, results) {
                if (err) throw err;
                res(results);
            });
        });
    },
    //      * `updateOne()`
    updateOne: async function updateOne() {
        return new Promise((res, rej) => {
            connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerId }], function (err, results) {
                if (err) throw err;
                res(results);
            });
        });
    }
};

//    * Export the ORM object in `module.exports`.
module.exports = orm;