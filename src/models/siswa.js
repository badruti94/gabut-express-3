const mongoose = require('mongoose');

const { Schema } = mongoose;

const siswaSchema = new Schema({
  nis: String,
  nama: String,
  jenis_kelamin: String,
  kelas: String,
});

module.exports = mongoose.model('Siswa', siswaSchema);
