const mongoose = require('mongoose');

const { Schema } = mongoose;

const GuruSchema = new Schema({
  nip: String,
  nama: String,
  jenis_kelamin: String,
});

module.exports = mongoose.model('Guru', GuruSchema);
