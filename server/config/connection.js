/*=== main connection file ===*/
/* Module dependencies */
const dotenv = require('dotenv').config();
const app = require('../app');
// const http = require('http');
const mongoose = require('mongoose');
const chalk = require('chalk');


/* Connect to Database MongoDB */
mongoose.connect(process.env.MONGODB)
.then(() => {
  console.log(chalk.greenBright("connected to mongoDB"));

  /* Connect to Port */
  const PORT = process.env.PORT || 3007;
  app.listen(PORT, () => {
    console.log(chalk.yellow(`The server is listening to port: ${PORT} || Link: http://localhost:${PORT}/`)); // הועבר מלמטה
  });
})
.catch((error) => {
  console.log(chalk.red("could not connect to mongoDB"));
  console.log(error);
});