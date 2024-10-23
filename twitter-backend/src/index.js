import express from 'express';
import {connect} from './config/database.js';
const app=express();
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';   
import passport from 'passport'; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);  
import { passportAuth } from './config/jwt-middleware.js';
app.use(passport.initialize());



passportAuth(passport);
 
app.listen(3000,async()=>{
    console.log('server listening on port 3000');
    await connect();
    console.log('mongo connection established');
 
 
});