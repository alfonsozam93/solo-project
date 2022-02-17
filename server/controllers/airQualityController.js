const db = require('../models/airQualityModels');
const airQualityController = {};

airQualityController.addUser= (req, res, next) => {
  // If time: come back and insert films
  const thisQuery = 'INSERT INTO airQuality (firstname, lastname, city, reason) VALUES ($1, $2, $3, $4, $5)'
  const body = req.body;
  const insertValues = [body.firstname, body.lastname, body.city, body.reason];

  db.query(thisQuery, insertValues).then((data) => {
    next();
  }).catch((err) => {
    return next({
      log: 'Error occurred when querying the database for character details.',
      message: { err: 'Error occurred in starWarsController.addCharacter. Check server logs for more details.' },
    });
  });
};


module.exports = airQualityController;

