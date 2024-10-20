import express from 'express';
import {connect} from './config/database.js';
const app=express();
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);  

import {UserRepository,TweetRepository} from './repository/index.js';
import LikeService from './services/like-service.js';

 
app.listen(3000,async()=>{
    console.log('server listening on port 3000');
    await connect();
    console.log('mongo connection established');

    const  userRepo=new UserRepository();
   const tweetRepo = new TweetRepository();

    const tweets=await tweetRepo.getAll(0,10);

    // const user=await  userRepo.create({
    //     email:'user@example.com', 
    //     name:'test user',
    //     password:'123'
    // // });
    // const users=await userRepo.getAll(); 

    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0]?.id,'Tweet',users[0]._id);  

});