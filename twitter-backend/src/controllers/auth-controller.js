
import UserService from "../services/user-service.js";

const userService=new UserService();

export const signup=async (req,res)=>{
    try {
        const response=await userService.signup({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        })

        
        return res.status(201).json({
            success:true,
            message:'Successfully created a new User',
            data:response,
            err:{}
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Failed to create a new user '+error.message,
            data:{},
            err:error
        })
    }
}



export const login =async(req,res)=>{
    try {

        const token=await userService.signin(req.body);
        return res.json({
            success:true,
            message:'User logged in successfully',
            data:token,
            err:{}
        });


    } catch (error) {
         return res.status(500).json({
            success:false,
            message:'Failed to login user '+error.message,
            data:{},
            err:error
        });
    }
}