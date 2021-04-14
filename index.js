const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const siswaRoute = require('./src/routes/siswa');
const guruRoute = require('./src/routes/guru');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.end('Hello World');
});

app.use(bodyParser.json());

// ROUTES
app.use('/siswa', siswaRoute);
app.use('/guru', guruRoute);

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Connection Success');
});
