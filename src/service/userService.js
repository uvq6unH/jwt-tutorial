import bcrypt from 'bcryptjs';
import mysql from 'mysql2';

const salt = bcrypt.genSaltSync(10);


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}
const createNewUser = (email, password, username) => {
    let hassPass = hashUserPassword(password);

    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?) ', [email, hassPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
        }
    );

}
const getUserList = () => {
    let users = [];
    connection.query(
        'select * from users',
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log("check results", results)
        }
    );
}

module.exports = {
    createNewUser, getUserList
}