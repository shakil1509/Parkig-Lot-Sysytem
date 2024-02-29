const Sequalize = require('../configs/mysqldb').sequalize;
const DataTypes = require('sequelize');

// Define the ParkingSpot model
const ParkingSpot = Sequalize.define('ParkingSpot', {
	spotId: {
	  type: DataTypes.INTEGER,
	  autoIncrement: true,
	  primaryKey: true,
	  indexes: [{ unique: true, fields: ['spotId'] }]
	},
	spotType: {
	  type: DataTypes.STRING, // carSpot, disabledSpot, electricCarSpot, motorcyleSpot
	  require: true
	},
	floor: {
	  type: DataTypes.INTEGER, // 1, 2, 3
	},
	location: {
      type: DataTypes.STRING, // A, B, C, D
    },
	isOccupied: {
	  type: DataTypes.BOOLEAN,
	  defaultValue: false
	}
  },
  {
	timestamps: true
  });

// Execute the sync command to run migrations 
Sequalize
  .sync({ force: false })
  .then(() => console.log("Synced ParkingSpot table"))
  .catch((error) => console.log("Error in ParkingSpot table", error));

module.exports = ParkingSpot;