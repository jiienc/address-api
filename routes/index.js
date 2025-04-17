import express from 'express';
import { getProvinces } from '../controllers/provinces.js';
import { getRegencies } from '../controllers/regencies.js'

const router = express.Router();

router.get('/provinces', getProvinces)
router.get('/regencies/:id', getRegencies);

export default router;
