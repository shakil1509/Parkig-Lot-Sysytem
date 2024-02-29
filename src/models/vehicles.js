const Sequalize = require('../configs/mysqldb').sequalize;
const DataTypes = require('sequelize');

// Define the Vehicle model
const Vehicle = Sequalize.define('Vehicle', {
	vehicleId: {
	  type: DataTypes.INTEGER,
	  autoIncrement: true,
	  primaryKey: true,
	  indexes: [{ unique: true, fields: ['vehicleId'] }]
	},
	registerNumber: {
	  type: DataTypes.STRING,
	}, 
	type:{
      type: DataTypes.STRING 
	} 
  }, 
  {
	timestamps: true
  });

// Execute the sync command to run migrations 
Sequalize
  .sync({ force: false })
  .then(() => console.log("Synced Vehicle table"))
  .catch((error) => console.log("Error in Vehicle table", error));

module.exports = Vehicle;