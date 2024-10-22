import passport from 'passport';

export const authenticate= (req,res,next)=>{
    passport.authenticate('jwt',(err,user,data)=>{
        if(err) next(err);
        if(!user){
            return res.status(403).json({
                success:false,
                message:'Authentication failed',
                data:err
            })
        }

        req.user=user;
        next();
    })(req,res,next);
}