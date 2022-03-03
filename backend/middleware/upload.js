const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const dbConfig = require("../database/db");
var storage = new GridFsStorage({
  url: dbConfig.db,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-zdig-${file.originalname}`;
      return filename;
    }
    return {
      bucketName: dbConfig.imgBucket,
      filename: `${Date.now()}-zdig-${file.originalname}`
    };
  }
});
var uploadFiles = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;