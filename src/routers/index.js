import { Router } from "express";
import contactsRouter from './contacts.js';
import authRoutes from './auth.js';


const router = Router();

router.use('/contacts', contactsRouter);
router.use('/auth', authRoutes);

export default router;