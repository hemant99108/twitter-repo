import mongoose from 'mongoose';
const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        maxlength:[250,'tweet cant be more than 250 characters']
    },
   
},{timestamps:true});


 


const Tweet=mongoose.model('Tweet',tweetSchema);

export default Tweet;