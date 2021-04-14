const router = require('express').Router()
const siswaController = require('../controllers/siswa')

router.get('/', siswaController.getAll)
router.get('/:id', siswaController.getById)
router.post('/', siswaController.create)
router.put('/:id', siswaController.update)
router.delete('/:id', siswaController.delete)

module.exports = router