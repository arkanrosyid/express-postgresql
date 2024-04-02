const express = require('express');
const apiRoutes = require('./src/routes/v1/index.js');
const xss = require('xss');
const dotenv = require('dotenv');

const envFilePath = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';dotenv.config({ path: envFilePath });




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});