const {Router} = require('express');
import { getCharById } from '../controllers/getCharById';
import { getCharDetail } from '../controllers/getCharDetail';

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

module.exports = router;