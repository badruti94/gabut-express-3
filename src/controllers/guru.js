const Guru = require('../models/guru')

exports.getAll = (req, res) => {
    Guru.find({}, (err, guru) => {
        if (err) throw err
        res.status(200).json({
            status: 'success',
            data: {
                guru
            }
        })
    })
}

exports.getById = (req, res) => {
    const id = req.params.id

    Guru.findById(id,(err, guru) => {
        if(err) throw err

        res.status(200).json({
            status : 'success',
            data : {
                guru
            }
        })
    })
}

exports.create = (req, res) => {
    const guru = new Guru({ ...req.body })

    guru.save((err, guru) => {
        if(err) throw err
        res.status(201).json({
            status: 'success',
            message: 'Data berhasil disimpan',
            data: {
                guru
            }
        })
    })
}


exports.update = (req, res) => {
    const id = req.params.id
    Guru.findByIdAndUpdate(id, { ...req.body }, {useFindAndModify:false}, (err, guru) => {
        if(err) throw err
        res.status(200).json({
            status: 'success',
            message: 'Data berhasil diupdate',
            data: {
                guru
            }
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Guru.findByIdAndDelete(id,{useFindAndModify:false},(err,guru)=>{
        if(err) throw err
        res.status(200).json({
            status: 'success',
            message: 'Data berhasil dihapus',
            data: {
                guru
            }
        })
    })
}