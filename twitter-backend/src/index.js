const express=require('express');
const connect=require('./config/database');
const app=express();


// const TweetRepository
const Comment=require('./models/comment');



app.listen(3000,async()=>{
    console.log('server listening on port 3000');
    await connect();
    console.log('mongo connection established');
})