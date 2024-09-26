import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';

const salt = bcrypt.genSaltSync(10);


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
const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });

    let users = [];
    // connection.query(
    //     'select * from users',
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err);
    //             return users;
    //         }
    //         users = results;
    //         return users;
    //     }
    // );
    try{
        const [rows, fields] = await connection.execute(
            'Select * from users'
        );
        return rows;
    }catch(error){
        console.log(">>> check errors: ",error)
    }
}

module.exports = {
    createNewUser, getUserList
}