require("dotenv").config();

console.log("ENV CLOUD:", process.env.CLOUDINARY_CLOUD_NAME);

const cloudinary = require("./config/cloudinary");

cloudinary.api
  .ping()
  .then((result) => {
    console.log("SUCCESS");
    console.log(result);
  })
  .catch((err) => {
    console.error("FAILED");
    console.error(err);
  });