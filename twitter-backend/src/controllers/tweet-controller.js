import TweetService from "../services/tweet-services.js";

import cloudinary from "../config/cloudinaryConfig.js";

const tweetService=new TweetService();

export const createTweet=async(req,res)=>{

    try {
        let imageUrl='';
        //if an image is uploaded then upload it to cloudinary 
        if(req.file.path){
            const result=cloudinary.uploader.upload(req.file.path,{
                folders:'tweets/' //create a folder named tweets on the cloudinary
            });
            imageUrl=result.secure_url;
        }


        const tweetData={
            ...req.body,
            image:imageUrl,
        }


        const response=await tweetService.create(tweetData);
        return res.status(201).json({
            success:true,
            message:'Successfully created a new tweet',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(501).json({
            success:false,
            message:'something went wrong in creating a new tweet',
            data:{},
            err:error
        })
    }
}


export const getTweet=async(req,res)=>{

    try {
        const response=await tweetService.get(req.params.id);
        return res.status(200).json({
            success:true,
            message:'Successfully found  tweet',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(501).json({
            success:false,
            message:'something went wrong while finding tweet'+error.message,
            data:{},
            err:error
        })
    }
}