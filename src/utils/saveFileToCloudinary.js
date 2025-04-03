import cloudinary from 'cloudinary';

import { getEnvVar } from './getEnvVar.js';

cloudinary.v2.config({
  secure: true,
  cloud_name: getEnvVar('CLOUD_NAME'),
  api_key: getEnvVar('API_KEY'),
  api_secret: getEnvVar('API_SECRET'),
});

export async function saveFileToCloudinary(filePath) {
  try {
    console.log("Uploading to Cloudinary:", filePath);
    const result = await cloudinary.v2.uploader.upload(filePath);
    console.log("Upload success:", result);
    return result;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload file to Cloudinary");
  }
}