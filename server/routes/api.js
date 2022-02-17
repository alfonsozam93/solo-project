const express = require('express');

const airQualityController = require('../controllers/airQualityController.js');

const router = express.Router();

router.get('/',
  airQualityController.//,
  (req, res) => res.status(200).json()
);

router.get('TBD',
  airQualityController.,
  (req, res) => res.status(200).json(res.locals.result)
);

router.post('TBD2',
  airQualityController.,
  (req, res) => res.status(200).json(res.locals.result)
);

router.put('TBD3',
  airQualityController.,
  (req, res) => res.status(200).json({})
);

router.delete('TBD4',
  airQualityController.,
  (req, res) => res.status(200).json(req.body)
);

module.exports = router;
