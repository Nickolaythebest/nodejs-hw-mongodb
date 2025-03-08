import { Router } from "express";
import { createContactController, deleteContactController, getContactByIdController, getContactsCoontroller, getFaviconController, patchContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get('/favicon.ico', ctrlWrapper(getFaviconController));

router.get('/contacts', ctrlWrapper(getContactsCoontroller));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', ctrlWrapper(createContactController));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

router.delete('/contact/:contactId', ctrlWrapper(deleteContactController));


export default router;
