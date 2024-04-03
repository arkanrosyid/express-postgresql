const express = require('express');
const apiRoutes = require('./src/routes/v1/index.js');
const xss = require('xss');
const dotenv = require('dotenv');
const createError = require('http-errors');

const envFilePath = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';dotenv.config({ path: envFilePath });
const errorHandler = require('./src/utils/errorHandler');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", apiRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });
  
app.use(errorHandler.errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


