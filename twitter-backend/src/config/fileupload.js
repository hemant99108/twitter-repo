import multer from 'multer';

import cloudinary from '../config/cloudinaryConfig.js';
import fs from 'fs';


export const uploadImage=(req,res)=>{
    try {
        const imagePath=req.file.path;
        //upload the image to cloudinary 
        cloudinary.uploader.upload(imagePath,{folder:'uploads/'},(err,result)=>{
            if(err){
                return res.status(500).json({msg:'upload to cloudinary failed'});
            }

            //delete the local image
            fs.unlinkSync(imagePath);

            //return cloudinary image url 
            res.json({url:result.secure_url});
        })
    } catch (error) {
        res.status(500).json({msg:'upload to cloudinary failed '+error.message});
    }
}