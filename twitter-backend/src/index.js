import express from 'express';
import {connect} from './config/database.js';
const app=express();
 
import service from './services/tweet-services.js';
  
app.listen(3000,async()=>{
    console.log('server listening on port 3000');
    await connect();
    console.log('mongo connection established');

    let serv=new service();

    await serv.create({content:'done with #refactor'});
    
})  ;