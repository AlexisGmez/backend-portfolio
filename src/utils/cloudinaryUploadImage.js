import { v2 as cloudinary } from "cloudinary";

export const cloudinaryConfig = () => {
  cloudinary.config({
    cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
    api_key: `${process.env.CLOUDINARY_API_KEY}`,
    api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
    secure: true,
  });
};

export const cloudinaryUploadImage = async (img, folderName) => {
  try {
    const response = await cloudinary.uploader.upload(img, {
      overwrite: true,
      folder: folderName,
      use_filename: true,
      allowed_formats: ["jpg", "png", "webp"],
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
