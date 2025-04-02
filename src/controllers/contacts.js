import createHttpError from "http-errors";
import { createContact, deleteContact, getAllContacts, getContactById, updateContact } from "../services/contacts.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";
import { saveFileToUploadDir } from "../utils/saveFileToUploadDir.js";
import { getEnvVar } from "../utils/getEnvVar.js";
import { saveFileToCloudinary } from "../utils/saveFileToCloudinary.js";



export const getContactsController = async (req, res, next) => {
  const {page, perPage} = parsePaginationParams(req.query);
  const {sortOrder, sortBy} = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  const userId = req.user._id;

    const contacts = await getAllContacts({
      page,
      perPage,
      sortOrder,
      sortBy,
      filter,
      userId,
    });
    res.status(200).json({
        status: 200,
        message: "Successfully found contacts!",
        data: contacts,
      });
};

export const getContactByIdController = async (req, res, next) => {
    const { contactId } = req.params;
    const userId = req.user._id;
      const contact = await getContactById(contactId, userId);
      if(!contact) {
        throw createHttpError(404, 'Contact not found');
      }
      res.status(200).json({
        status: 200,
          message: `Successfully found contact with id: ${contactId}!`,
        data: contact,
      });

};

export const getFaviconController = async (req, res) => {
    res.status(204);
};

export const createContactController = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const photo = req.file;
    let photoUrl = null;

    if (photo) {
      if (getEnvVar("UPLOAD_TO_CLOUDINARY") === "true") {
        const result = await saveFileToCloudinary(photo.path);
        photoUrl = result.secure_url;
      } else {
        photoUrl = await saveFileToUploadDir(photo);
      }
    }

    const contactData = {
      ...req.body,
      userId,
      photo: photoUrl,
    };

    const contact = await createContact(contactData, userId);

    res.status(201).json({
      status: 201,
      message: "Successfully created a contact!",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

export const patchContactController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const userId = req.user._id;
    const photo = req.file;
    let photoUrl = null;

    if (photo) {
      if (getEnvVar("UPLOAD_TO_CLOUDINARY") === "true") {
        photoUrl = await saveFileToCloudinary(photo.path);
        
      } else {
        photoUrl = await saveFileToUploadDir(photo);
      }
    }

    const updatedData = {
      ...req.body,
      ...(photoUrl && { photo: photoUrl }),
    };

    const result = await updateContact(contactId, updatedData, userId);
    if (!result) {
      throw createHttpError(404, "Contact not found");
    }

    res.json({
      status: 200,
      message: "Successfully patched a contact!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteContactController = async (req, res, next) => {
    const { contactId } = req.params;
    const userId = req.user._id;
    const contact = await deleteContact(contactId, userId);
    if (!contact) {
        throw createHttpError(404, 'Contact not found');
      }
      res.status(204).send();
};
