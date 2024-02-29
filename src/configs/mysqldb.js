const Sequalize = require('sequelize');
require('dotenv').config();
const DbName=process.env.DbName;
const AdminName=process.env.AdminName;
const Password=process.env.Password;

const sequalize = new Sequalize(
        DbName, 
		AdminName,
		Password, {
			dialect: 'mysql',
			host: 'localhost',
			pool: {
    			max: 5,
    			min: 0,
    			idle: 10000
  			}
		});

// Check the connection to database - calling authenticate method

const connectToMysql = async () => {
	try{
		await sequalize.authenticate();
		console.log("Successfully connected to the database.");
	}
	catch(error){
		console.log(error);
	}
}


module.exports = {sequalize, connectToMysql}