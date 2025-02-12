import axios from "axios";
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;

export const imgHosting = async (photo) => {
  const imgData = new FormData();
  imgData.append("file", photo);
  imgData.append("upload_preset", "unsigned_preset");
  imgData.append("folder", "car-doctor");
  try {
    const imgRes = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      imgData
    );

    const secure_url = imgRes?.data?.secure_url;
    const public_id = imgRes?.data?.public_id;

    const imgHostingInfo = { secure_url, public_id };
    return imgHostingInfo;
  } catch (err) {
    console.log(`Error while hosting image: `, err);
  }
};
