const Siswa = require('../models/siswa');

const data = [
  {
    nis: '131313',
    nama: 'Subarjo Pratowo',
    jenis_kelamin: 'Laki - laki',
    kelas: '11 IPA 2',
  },
  {
    nis: '131314',
    nama: 'Zulfa Maryati',
    jenis_kelamin: 'Perempuan',
    kelas: '11 IPA 2',
  },
  {
    nis: '131315',
    nama: 'Zulfa Marya',
    jenis_kelamin: 'Laki - laki',
    kelas: '11 IPA 2',
  },
];

exports.getAll = (req, res) => {
  Siswa.find({}, (err, siswa) => {
    if (err) throw err;

    res.status(200).json({
      status: 200,
      message: 'success',
      data: siswa,
    });
  });
};

exports.getById = async (req, res) => {
  const { id } = req.params;

  const siswa = await Siswa.findById(id);
  res.json({
    status: 200,
    message: 'success',
    data: siswa,
  });
};

exports.create = (req, res) => {
  const siswa = new Siswa({ ...req.body });

  siswa.save().then(() => {
    res.status(201).json({
      status: 200,
      message: 'success',
    });
  });
};

exports.update = (req, res) => {
  const { id } = req.params;

  Siswa.findByIdAndUpdate(id, { ...req.body }, (err, siswa) => {
    if (err) throw err;
    res.json({
      status: 200,
      message: 'success',
      data: siswa,
    });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Siswa.findByIdAndDelete(id, (err, siswa) => {
    if (err) throw err;
    res.status(200).json({
      status: 200,
      message: 'success',
      data: siswa,
    });
  });
};
