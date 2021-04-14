const router = require('express').Router()
const guruController = require('../controllers/guru')

router.get('/',guruController.getAll)
router.get('/:id', guruController.getById)
router.post('/', guruController.create)
router.put('/:id', guruController.update)
router.delete('/:id', guruController.delete)

module.exports = router