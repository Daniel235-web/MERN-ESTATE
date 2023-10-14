import express from 'express';
import { createListing, deleteListing, updateListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// Use proper route parameter definition with a colon (:id)
router.post('/create', verifyToken, createListing);

// Use a colon before "id" to define it as a route parameter
router.delete('/delete/:id', verifyToken, deleteListing);

// Use a colon before "id" to define it as a route parameter
router.post('/update/:id', verifyToken, updateListing);

export default router;
