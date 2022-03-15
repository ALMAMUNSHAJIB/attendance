const router = require('express').Router();
const {getAllEmploeyee, addEmploeyee, getEmploeyeeById} = require('../controller/emploeyee');
const {checkLogin} = require('../middleware/auth');

router.get('/',checkLogin, getAllEmploeyee);
router.get('/:empId', getEmploeyeeById);
router.post('/',checkLogin, addEmploeyee);


module.exports = router;