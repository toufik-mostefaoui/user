const express = require('express');
const router = express.Router();

const LaptopController = require('../controllers.js/LaptopController');
const upload = require('../middleware/upload');

router.post('/add',upload.array('image'),LaptopController.add);
router.post('/update',LaptopController.update);
router.post('/delete',LaptopController.delet);

module.exports = router;