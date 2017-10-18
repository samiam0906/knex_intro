// Start command: $ npm run dev

// Bring in express
const express = require('express')
const app = express()

const cars = require('./routes/cars')
app.use(cars)

const users = require('./routes/users')
app.use(users)

// knex('car').then((result) => {
//   console.log(result);
//   knex.destroy();
// })
// .catch((err) => {
//   console.error((err));
//   knex.destroy();
//   process.exit(1);
// })

app.listen(3000, function() {
  console.log("Listening on server port 3000...");
});
