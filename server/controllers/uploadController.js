const { IncomingForm } = require("formidable")
const fs = require("fs")
const cloudinary = require("cloudinary").v2
const { CLOUD_NAME, API_KEY, API_SECRETKEY } = require("../config/env")
const {HttpStatusCodes} = require("../utils/constants")


cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRETKEY
});

module.exports.UploadImage = (req,res)=>{
    const form = new IncomingForm({multiples:false})
    form.parse(req, (err, fields, files) => {
        const file = files.Image[0]

        fs.readFile(file.filepath, (err, data) => {
            if (err) throw new Error(err.message)
            cloudinary.uploader.upload(file.filepath,
                { public_id: `${file.newFilename}`, folder: "Forklore" }, (error, result) => {
                    if (error) throw new Error(error.message)
                    // uploadResult = result
                  return  res.status(HttpStatusCodes.SUCCESS).json({secure_url:result.secure_url})
                });
        })
    })
}