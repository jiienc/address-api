import express from 'express';
import { getProvinces } from '../controllers/provinces.js';
import { getRegencies, getRegenciesById } from '../controllers/regencies.js'

const router = express.Router();

router.get('/provinces', getProvinces)
router.get('/regencies', getRegencies);
router.get('/regencies/:id', getRegenciesById);

export default router;
