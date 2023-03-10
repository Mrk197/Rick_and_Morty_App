const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');
const {Router} = require('express');
const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

module.exports = router;