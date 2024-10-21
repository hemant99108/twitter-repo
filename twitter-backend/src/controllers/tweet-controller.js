import TweetService from "../services/tweet-services.js";

const tweetService=new TweetService();

export const createTweet=async(req,res)=>{

    try {
        const response=await tweetService.create(req.body);
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