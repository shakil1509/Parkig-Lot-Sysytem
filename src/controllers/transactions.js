const { transactionsGetService } = require("../services/transactions/get");
const { transactionsGetSingleService } = require("../services/transactions/getSingle");
const { transactionsPostService } = require("../services/transactions/post");
const { transactionsPutService } = require("../services/transactions/put");

exports.getTransactionsController = (req, res) => {
  transactionsGetService(req.params, req.query)
    .then((response) => {
      if (!response.status) {
        throw new Error(response.message);
      }
      res.status(200).json({
        status: true,
        response: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({
        status: false,
        message: err.message,
      });
    });
};

exports.getSingleTransactionsController = (req, res) => {
    transactionsGetSingleService(req.params, req.query)
      .then((response) => {
        if (!response.status) {
          throw new Error(response.message);
        }
        res.status(200).json({
          status: true,
          response: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          status: false,
          message: err.message,
        });
      });
};

exports.postTransactionsController = (req, res) => {
    transactionsPostService(req.body)
      .then((response) => {
        if (!response.status) {
          throw new Error(response.message);
        }
        res.status(200).json({
          status: true,
          response: response.message,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          status: false,
          message: err.message,
        });
      });
};

exports.putTransactionsController = (req, res) => {
    transactionsPutService(req.body)
      .then((response) => {
        if (!response.status) {
          throw new Error(response.message);
        }
        res.status(200).json({
          status: true,
          response: response.message,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          status: false,
          message: err.message,
        });
      });
};