const sequalize = require('../configs/mysqldb').sequalize;
const DataTypes = require('sequelize');
const ParkingSpot = require('./parkingSpots');
const Vehicle = require('./vehicles');

const Ticket = sequalize.define('tickets', {
    ticketId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      indexes: [{ unique: true, fields: ['ticketId'] }]
    },
    startTime: {
      type: DataTypes.DATE,
      require: true
    }, 
    endTime: {
      type: DataTypes.DATE,
    },
  }, 
  {
    timestamps: true,
  });
  
// Define relationships
Transaction.belongsTo(ParkingSpot, { foreignKey: 'spotId'});
Transaction.belongsTo(Vehicle, { foreignKey: 'vehicleId'});
  

// Execute the sync command to run migrations 
sequalize
  .sync({ force: false })
  .then(() => console.log("Synced Ticket table"))
  .catch((error) => console.log("Error in Ticket table", error));

module.exports = Ticket;