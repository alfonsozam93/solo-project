const path = require('path');
const express = require('express');
const app = express();

// const apiRouter = require('./routes/api');

const PORT = 3000;

// handle parsing request body

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// Home route
app.get('/', (req, res) => {
  res.send(ads);
});

/**
 * handle requests for static files
 */
//  app.use(express.static(path.resolve(__dirname, '../client')));

/**
 * define route handlers
 */
//  app.use('/api', apiRouter);

//global error catcher

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


 app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;