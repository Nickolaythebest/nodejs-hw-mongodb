import Joi from "joi";

export const createContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.base': 'Username should be a string', // Кастомізація повідомлення для типу "string"
        'string.min': 'Username should have at least {#limit} characters',
        'string.max': 'Username should have at most {#limit} characters',
        'any.required': 'Username is required',
      }),
      phoneNumber: Joi.string().min(3).max(16).required().messages({
        'string.base': 'Phoneumder should be a number', // Кастомізація повідомлення для типу "string"
        'string.min': 'Phoneumder should have at least {#limit} characters',
        'string.max': 'Phoneumder should have at most {#limit} characters',
        'any.required': 'Phoneumder is required',
      }),
      email: Joi.string().min(3).max(20).messages({
        'string.base': 'Email should be a string', // Кастомізація повідомлення для типу "string"
        'string.min': 'Email should have at least {#limit} characters',
        'string.max': 'Email should have at most {#limit} characters',
      }),
      isFavorite: Joi.boolean(),
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
      }),
      phoneNumber: Joi.string().min(3).max(16).messages({
        'string.base': 'Phoneumder should be a number', // Кастомізація повідомлення для типу "string"
        'string.min': 'Phoneumder should have at least {#limit} characters',
        'string.max': 'Phoneumder should have at most {#limit} characters',

      }),
      email: Joi.string().min(3).max(20).messages({
        'string.base': 'Email should be a string', // Кастомізація повідомлення для типу "string"
        'string.min': 'Email should have at least {#limit} characters',
        'string.max': 'Email should have at most {#limit} characters',
      }),
      isFavorite: Joi.boolean(),
      contactType: Joi.string().valid('work', 'home', 'personal').messages({
        'string.base': 'Type of contact should be a string', // Кастомізація повідомлення для типу "string"
        'string.valid': 'Type of contact should be work order home order personal',
      }),
});

