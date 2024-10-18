const express=require('express');
const connect=require('./config/database');
const app=express();
 

// const TweetRepository
const Comment=require('./models/comment');
const Hashtag=require('./models/hashtags');
const HashtagRepository = require('./repository/hashtag-repository');
const TweetService=require('./services/tweet-services');
  
app.listen(3000,async()=>{
    console.log('server listening on port 3000');
    await connect();
    console.log('mongo connection established');

    let service=new TweetService(); 
    const tweet= await service.create({
        content: ' #nodejs going to be #loved ',         
    })

    console.log(tweet);  
    
})  