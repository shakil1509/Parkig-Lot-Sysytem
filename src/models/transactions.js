const Sequalize = require('../configs/mysqldb').sequalize;
const DataTypes = require('sequelize');
const Ticket = require('./tickets');

// Define the Transaction model
const Transaction = Sequalize.define('Transaction', {
  transactionId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    indexes: [{ unique: true, fields: ['transactionId'] }]
  },
  amountPaid: {
    type: DataTypes.FLOAT,
  }
},
{
  timestamps: true
});

// Define relationships
Transaction.belongsTo(Ticket, { foreignKey: 'ticketId' });

// Execute the sync command to run migrations 
Sequalize
  .sync({ force: false })
  .then(() => console.log("Synced Transaction table"))
  .catch((error) => console.log("Error in Transaction table", error));

module.exports = Transaction;