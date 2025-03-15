import Joi from "joi";

export const createContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.base': 'Username should be a string', // Кастомізація повідомлення для типу "string"
        'string.min': 'Username should have at least {#limit} characters',
        'string.max': 'Username should have at most {#limit} characters',
        'any.required': 'Username is required',
      }),
      phoneNumber: Joi.number().min(3).max(16).required().messages({
        'number.base': 'Phonenumder should be a number', // Кастомізація повідомлення для типу "string"
        'number.min': 'Phonenumder should have at least {#limit} characters',
        'number.max': 'Phonenumder should have at most {#limit} characters',
        'any.required': 'Phonenumder is required',
      }),
      email: Joi.string().min(3).max(20).messages({
        'string.base': 'Email should be a string', // Кастомізація повідомлення для типу "string"
        'string.min': 'Email should have at least {#limit} characters',
        'string.max': 'Email should have at most {#limit} characters',
      }),
      isFavourite: Joi.boolean(),
      contactType: Joi.string().valid('work', 'home', 'personal').required().messages({
        'string.base': 'Type of contact should be a string', // Кастомізація повідомлення для типу "string"
        'string.valid': 'Type of contact should be work order home order personal',
        'any.required': 'Type of contact is required',
      }),
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).messages({
        'string.base': 'Username should be a string', // Кастомізація повідомлення для типу "string"
        'string.min': 'Username should have at least {#limit} characters',
        'string.max': 'Username should have at most {#limit} characters',
        'any.required': 'Username is required',
      }),
      phoneNumber: Joi.number().min(3).max(16).messages({
        'number.base': 'Phonenumder should be a number', // Кастомізація повідомлення для типу "string"
        'number.min': 'Phonenumder should have at least {#limit} characters',
        'number.max': 'Phonenumder should have at most {#limit} characters',
        'any.required': 'Phonenumder is required',
      }),
      email: Joi.string().min(3).max(20).messages({
        'string.base': 'Email should be a string', // Кастомізація повідомлення для типу "string"
        'string.min': 'Email should have at least {#limit} characters',
        'string.max': 'Email should have at most {#limit} characters',
      }),
      isFavourite: Joi.boolean(),
      contactType: Joi.string().valid('work', 'home', 'personal').messages({
        'string.base': 'Type of contact should be a string', // Кастомізація повідомлення для типу "string"
        'string.valid': 'Type of contact should be work order home order personal',
        'any.required': 'Type of contact is required',
      }),
});

